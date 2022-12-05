import ExpenseItem from './ExpenseItem';
import NoExpense from './NoExpense';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const expenses = props.expenses || [];

  if (expenses.length === 0) {
    return (
      <div>
        <NoExpense />
      </div>
    );
  }

  const output = expenses.map((exp) => (
    <ExpenseItem key={exp.id} expense={exp} />
  ));

  return <ul className="expenses-list">{output}</ul>;
};

export default ExpensesList;
