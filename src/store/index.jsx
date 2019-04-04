import React, { useReducer, createContext,useEffect } from 'react';
import axios from 'axios';
export const Context = createContext();

const ticketsService = axios.create({baseURL: 'http://localhost:4567', timeout: 5000});

const initialState = {
    loading: false,
    data: [],
    error: null,
    search: false
}

const SET_DATA = 'SET_DATA';
const SET_ERROR = 'SET_ERROR';
const SET_SEARCH = 'SET_SEARCH';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

function reducer(state, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_SEARCH:
            return {
                ...state,
                search: !state.search
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return state;
    }
}

export function TicketProvider({ children }) {

    const [state,dispatch] = useReducer(reducer, initialState);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    useEffect(() => {

        dispatch({type: TOGGLE_LOADING});

        ticketsService
            .get('/getTickets', {cancelToken: source.token})
            .then(({data}) => {
                console.log(data);
                dispatch({type: SET_DATA, payload: data});
                dispatch({type: TOGGLE_LOADING});
            })
            .catch((error) => {
                console.error(error);
                dispatch({type: SET_ERROR, payload: error});
                dispatch({type: SET_SEARCH});
                dispatch({type: TOGGLE_LOADING});
            });

        return () => {
            source.cancel('stopped request');
        }

    }, [state.search]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}