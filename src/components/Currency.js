import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import {Dropdown} from 'react-bootstrap';

const Currency = () => {
    const { dispatch, currency, cname } = useContext(AppContext);


    const handleOnClick = (c) => {
        c = c.split(' ');
        dispatch({
            type:'CHG_CURRENCY',
            payload: c
        })
    }
    
    return (
        <div className='drop'>
            <Dropdown >
                <Dropdown.Toggle style={{backgroundColor:'#2ef62e'}}>
                    Currency ({currency} {cname})
                </Dropdown.Toggle>

                <Dropdown.Menu style={{backgroundColor:'#2ef62e', color:'white'}}>
                    <Dropdown.Item style={{backgroundColor:'#2ef62e', color:'white'}} onClick={event => handleOnClick("$ Dollar")}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item style={{backgroundColor:'#2ef62e', color:'white'}}onClick={event => handleOnClick("£ Pound")}>£ Pound</Dropdown.Item>
                    <Dropdown.Item style={{backgroundColor:'#2ef62e', color:'white'}} onClick={event => handleOnClick("€ Euro")}>€ Euro</Dropdown.Item>
                    <Dropdown.Item style={{backgroundColor:'#2ef62e', color:'white'}} onClick={event => handleOnClick("₹ Rupee")}>₹ Rupee</Dropdown.Item>                   
                </Dropdown.Menu>

            </Dropdown>
        </div>
    );
};
export default Currency;
