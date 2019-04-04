import React,{useContext} from 'react'
import { Context } from '../store';

export default function Ticket() {
    const { state, dispatch } = useContext(Context)
    const { data, error, loading,search } = state;

    if (loading) 
        return <p>Loading...</p>;
    if (error) 
        return <p>Ups, Something went wrong!</p>;
    return (
        <div>
            <div>
                {!!data.length && data
                    .map(({refNum, idCA}) => (
                        <span key={idCA}>{refNum}</span>
                    ))}
            </div>

            <button onClick={() => dispatch({type: 'SET_SEARCH', payload: true})} >
                Consultar
            </button>
        </div>
    )
}
