import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import NoExpense from './NoExpense';

function Expenses(props) {
  const expenses = props.expenses || [];
  let output;
  if (expenses.length > 0) {
    output = expenses.map((exp) => <ExpenseItem key={exp.id} expense={exp} />);
  } else {
    output = <NoExpense />;
  }

  return (
    <Card className="expenses">
      <div>
        <div>
          <ExpensesFilter
            onSelectionChanged={props.onSelectionChangedHandler}
            years={props.years}
          />
        </div>
        <div>{output}</div>
      </div>
    </Card>
  );
}

export default Expenses;
