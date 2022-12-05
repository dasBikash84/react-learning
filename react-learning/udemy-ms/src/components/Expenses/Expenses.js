import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  return (
    <Card className="expenses">
      <div>
        <div>
          <ExpensesFilter
            onSelectionChanged={props.onSelectionChangedHandler}
            years={props.years}
          />
        </div>
        <div>
          <ExpensesList expenses={props.expenses} />
        </div>
      </div>
    </Card>
  );
}

export default Expenses;
