import React, { useState } from 'react'
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enterDate, setEnteDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const handleChangTitle = (event) => {
        setEnteredTitle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,

        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const handleChangeAmount = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });


    };
    const handleChangeDate = (e) => {
        setEnteDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enterDate)

        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteDate('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={handleChangTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01" step='0.01'
                        value={enteredAmount}
                        onChange={handleChangeAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2022-10-12" max="2025-10-15"
                        value={setEnteDate}
                        onChange={handleChangeDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm