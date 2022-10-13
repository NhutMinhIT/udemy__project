import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
const ExpensesList = props => {
    if (props.items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                Found No Expensess
            </h2>
        )
    }
    return (
        <li>
            <ul className='expenses-list'>
                {props.items.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />
                ))}

            </ul>
        </li>
    );

};


export default ExpensesList