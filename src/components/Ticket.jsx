import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../store';
import { rendersytlebadge } from '../helpers/Utilities';

const TicketBox = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow:row wrap;
        height: 93px;
        width:100%;
        background-color:white;
        margin:0px;
        padding: 0px;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        overflow:hidden;
        &:hover {
            background: #e9e9e9;
            cursor: pointer;
        };
        @media only screen and (max-width : 767px) {
            flex-flow:column wrap;
        }
`;

const TicketDate = styled.span`
    color: white;
    text-align:center;
    margin: 10px 10px 10px 10px;
    padding: .1em .6em 0px .6em;
    border-radius:10rem;
    background: #009933;
    font-size:75%;
    font-weight:700;
    height: 18%;
    width: 100px;
`;

const TicketDesc = styled.p`
    color: black;
    text-align: justify;
    margin: 10px 10px 10px 10px;  
    height: 40%;
    font-size:10px;
    font-weight:700;
    overflow:hidden;
    width: 300px;
`;

const TicketAvatar = styled.div`
    margin: 10px 10px 0px 10px;
`;

const TicketAvatarImg = styled.img`
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: 2px solid #E91E63;
    box-shadow:  0 0 10px  rgba(0,0,0,0.6);
`;

const images = require.context('../assets', true);

function getImagesSrc() {
    const nameImg = 1 + Math.floor((Math.random() * (18 - 1)));
    const imgsrc = images(`./${ nameImg}.png`);
    return imgsrc;
}

export default function Ticket({ statuslist }) {
    const { state } = useContext(Context);
    const { data, error, loading } = state;
    const TicketNum = styled.span`
    color: white;
    text-align:center;
    margin: 10px 10px 10px 10px;
    padding: .1em .6em 0px .6em;
    border-radius:10rem;
    background:  ${props => rendersytlebadge(props.status) };
    font-size:75%;
    font-weight:700;
    height: 18%;
    `;

    if (loading) {
        return <p>Consultando Tickets...</p>;
    }
    if (error) {
        return <p>Error consumiendo Api</p>;
    }
    return (
            <>
                {!!data.length && data.filter((tk) => {
                    let found = false;
                    statuslist.forEach((item) => {
                        if (tk.status === item.nameca) {
                            found = true;
                        }
                    });
                    return found;
                }).map(({ refNum, idCA, openDate ,status}) => (
                    <TicketBox key={idCA} id={idCA}>   
                        <TicketNum status={status}>{refNum}</TicketNum>
                        <TicketDate>{openDate}</TicketDate>
                        <TicketAvatar>
                            <TicketAvatarImg src={getImagesSrc()} />
                        </TicketAvatar>
                    </TicketBox>
                ))}
            </>
    );
}
