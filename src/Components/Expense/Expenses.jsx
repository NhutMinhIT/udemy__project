import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import '../Expense/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2023')

    const handleChangeFilter = selectYear => {
        setFilterYear(selectYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onChangeFilter={handleChangeFilter} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div >
    );
}

export default Expenses;