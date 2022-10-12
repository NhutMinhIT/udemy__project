import React, { useState } from 'react';
import '../Expense/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
    //fuction Click Handler()

    const [title, setTitle] = useState(props.title)
    const handleClick = () => {
        setTitle('Update Success!!');
    }

    return (

        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
            <button className='btn__submit--primary'
                onClick={handleClick}
            >
                ChangeTitle
            </button>
        </Card>

    );
}
export default ExpenseItem