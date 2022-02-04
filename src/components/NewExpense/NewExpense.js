import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [formView, setFormView] = useState('');

    const onSaveExpenseDate = (data) => {
        props.onSaveExpenseDate({
            ...data,
            id: Math.random().toString()
        });
    }

    const toggleFormView = () => {
        setFormView(!formView);
    }

    return <div className='new-expense'>
        {!formView && <button onClick={toggleFormView}> Add New Expense</button>}
        {formView && <ExpenseForm toggleFormView={toggleFormView} onSaveExpenseDate={onSaveExpenseDate}/>}
    </div>
}


export default NewExpense;