import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;
  return (
    <div className="expense-date"> 
      <div className="expense-date__month">{date.toLocaleString("en-US", { month: "long" })}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__dat">{date.toLocaleString("en-US", { day: "2-digit" })}</div>
    </div>
  );
}

export default ExpenseDate;
