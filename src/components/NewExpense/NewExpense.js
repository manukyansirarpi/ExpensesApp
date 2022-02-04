import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onSaveExpenseDate = (data) => {
        props.onSaveExpenseDate({
            ...data,
            id: Math.random().toString()
        });
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={onSaveExpenseDate}/>
    </div>
}

export default NewExpense;