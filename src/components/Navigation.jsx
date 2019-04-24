import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../store';

const NavStyle = styled.div`
  display:flex;
  align-items: center;
  height: 15vh;
  background:#49a6ff;
  margin: 0px 0px  0px 0px;
  padding:  0px 0px  0px 0px;
`;

const MenuStyle = styled.div`
  width:85%;
`;

const Summarytyle = styled.div`
  width:25%; 
  display:flex;
  justify-content: flex-end;
  flex-direction: column  ;
  color:#3b73af;
  margin: 0px 10px  0px 0px;
  padding:0px 20px 0px 300px;
`;

const SummaryTextStyle = styled.span`
   align-self: flex-start;
   font-size:12px;
   font-weight:600;
   border-radius:10rem;
   background:white;
   margin: 0px 0px  4px 0px;
   padding: .1em .6em 0px .6em;
`;

export default function Navigation() {

    const { state, dispatch } = useContext(Context);
    const { data } = state;


    const sizeopen = data
        .filter(tk => tk.status === 'OP' || tk.status === 'INVQP').length;
    const sizeprogress = data.filter(tk => tk.status === 'INVWIP').length;
    const sizesuspended = data
        .filter(tk => (tk.status === 'INVHOLDUA' || tk.status === 'INVUSO' || tk.status === 'INVHOLDPIU' || tk.status === 'INVHOLDPPP' || tk.status === 'INVHOLDPDU')).length;
    const sizedone = data
        .filter(tk => tk.status === 'RE').length;


    return (
        <NavStyle>
            <MenuStyle>
                <span>Proyectos</span>
            </MenuStyle>
            <Summarytyle>
                <SummaryTextStyle>Total Tickets {sizeopen}</SummaryTextStyle>
                <SummaryTextStyle>Total Tickets en Proceso {sizeprogress}</SummaryTextStyle>
                <SummaryTextStyle>Total Tickets Suspendidos {sizesuspended}</SummaryTextStyle>
                <SummaryTextStyle>Total Tickets Cerrados {sizedone}</SummaryTextStyle>
            </Summarytyle>
            <button type="button" onClick={() => dispatch({ type: 'SET_SEARCH', payload: true })}>
                Consultar
            </button>
        </NavStyle>
    );
}
