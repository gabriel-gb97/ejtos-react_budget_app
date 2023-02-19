import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const expensed = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0)
    const modBuget = (value) => {
        if (value >= 20000){
            alert("The value cannot exceed 20.000");
            return;
        } else if (value <  expensed) {
            alert("The value cannot be lower than the spending amount of "+currency+expensed)
        } else {
            dispatch({
                type:'SET_BUDGET',
                payload: value
            })
        }


    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span><input type='number' value={budget} onChange={(event) => modBuget(event.target.value)} step="10"/>
        </div>
    );
};
export default Budget;
