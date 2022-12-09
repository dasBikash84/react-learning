import Card from '../UI/Card';
import Chart from '../Chart/Chart';
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
        {(props.expenses || []).length > 0 && (
          <Chart expensesData={props.expenses || []} />
        )}
        <div>
          <ExpensesList expenses={props.expenses} />
        </div>
      </div>
    </Card>
  );
}

export default Expenses;
