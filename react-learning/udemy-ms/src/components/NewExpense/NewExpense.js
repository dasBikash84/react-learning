import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmit={props.onExpenseSubmit} />
    </div>
  );
};

export default NewExpense;
