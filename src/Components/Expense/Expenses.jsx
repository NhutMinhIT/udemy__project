import Card from '../UI/Card';
import '../Expense/Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2023')

    const handleChangeFilter = selectYear => {
        setFilterYear(selectYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onChangeFilter={handleChangeFilter}
                />
                <ExpensesList items={filterExpenses} />
            </Card>
        </div >
    );
}

export default Expenses;