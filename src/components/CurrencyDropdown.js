import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
const Budget = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleOnClick = (crrncy) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: crrncy
        })
    }
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data="dropdown" aria-expanded="false">
                Currency ({currency})
            </button>
            <ul className="dropdown-menu">
                <li><span className="dropdown-item" onClick={handleOnClick('$')}>$ Dollar</span></li>
                <li><span className="dropdown-item" onClick={handleOnClick('£')}>£ Pound</span></li>
                <li><span className="dropdown-item" onClick={handleOnClick('€')}>€ Euro</span></li>
                <li><span className="dropdown-item" onClick={handleOnClick('₹')}>₹ Rupee</span></li>
            </ul>
        </div>

    );
};
export default Budget;