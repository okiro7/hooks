/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Dragula from 'react-dragula';
import Ticket from './Ticket';
import { rendersytlebadge } from '../helpers/Utilities';
// import {Context} from '../store';
import '../../node_modules/react-dragula/dist/dragula.css';

const StatusStyle = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  overflow-y:auto;
  height: 83vh;
`;

const StatusStyleColumn = styled.div`
  height:100%;
  width: 30%;
  background-color:#f5f5f5;
  border: white thick  solid;
  padding:0px;
`;

const StatusStyleHeader = styled.span`
   display:flex;
   justify-content: center;
   font-size:75%;
   font-weight:700;
   color:white;
   border-radius:10rem;
   background-color:  ${props => rendersytlebadge(props.status)};
   margin: 2px 0px  5px 0px;
   padding: .1em .6em 0px .6em;
`;

export default function TicketStatus() {
    // const { state } = useContext(Context);
    // const {data, error, loading, search} = state;

    const statusticketopenlist = [
        {
            nameca: 'OP',
        }, {
            nameca: 'INVQP',
        },
    ];
    const statusticketprogresslist = [
        {
            nameca: 'INVWIP',
        },
    ];

    const statusticketsuspendedlist = [
        {
            nameca: 'INVUSO',
        }, {
            nameca: 'INVHOLDPPP',
        }, {
            nameca: 'INVHOLDPDU',
        }, {
            nameca: 'INVHOLDUA',
        }, {
            nameca: 'INVHOLDPIU',
        },
    ];
    const statusticketdonelist = [
        {
            nameca: 'INSTRE',
        },
        {
            nameca: 'RE',
        },
    ];

    useEffect(() => {
        const open = document.getElementById('open');
        const progress = document.getElementById('progress');
        const suspended = document.getElementById('suspended');
        const done = document.getElementById('done');

        const dragula = Dragula([
            open, progress, suspended, done,
        ], {
            copy: false,
            revertOnSpill: true,
        });

        console.log('useEffect');
    }, [statusticketopenlist]);


    return (
        <StatusStyle>
            <StatusStyleColumn id="open">
                <StatusStyleHeader status={statusticketopenlist[0].nameca}>ABIERTOS</StatusStyleHeader>
                <Ticket statuslist={statusticketopenlist} />
            </StatusStyleColumn>
            <StatusStyleColumn id="progress">
                <StatusStyleHeader status={statusticketprogresslist[0].nameca}>EN PROGRESO</StatusStyleHeader>
                <Ticket statuslist={statusticketprogresslist} />
            </StatusStyleColumn>
            <StatusStyleColumn id="suspended">
                <StatusStyleHeader status={statusticketsuspendedlist[0].nameca}>SUSPENDIDOS</StatusStyleHeader>
                <Ticket statuslist={statusticketsuspendedlist} />
            </StatusStyleColumn>
            <StatusStyleColumn id="done">
                <StatusStyleHeader status={statusticketdonelist[0].nameca}>RESUELTOS</StatusStyleHeader>
                <Ticket statuslist={statusticketdonelist} />
            </StatusStyleColumn>
        </StatusStyle>
    );
}
