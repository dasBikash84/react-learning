import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const expenseDate = props.exDate;
  return (
    <Card className="expense-date">
      <div className="expense-date__month">
        {expenseDate.toLocaleString('en-US', { month: 'long' })}
      </div>
      <div className="expense-date__day">
        {expenseDate.toLocaleString('en-US', { day: '2-digit' })}
      </div>
      <div className="expense-date__year">{expenseDate.getFullYear()}</div>
    </Card>
  );
}

export default ExpenseDate;
