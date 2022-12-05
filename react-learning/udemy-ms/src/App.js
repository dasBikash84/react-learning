import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const years = ['2022', '2021', '2020', '2019', '2018'];

  const [expenses, setExpense] = useState([]);
  const [yearIndex, setYearIndex] = useState(0);

  function getSelectedExp() {
    return expenses.filter((exp) => {
      return exp.date.getFullYear().toString() === years[yearIndex];
    });
  }

  const expenseSubmitHandler = (expenseData) => {
    console.log('expenseData', expenseData);
    setExpense([
      {
        ...expenseData,
        id: expenseData.date.toString(),
      },
      ...expenses,
    ]);
  };

  const onSelectionChangedHandler = (selectedIndex) => {
    setYearIndex(+selectedIndex);
  };

  return (
    <div>
      <NewExpense onExpenseSubmit={expenseSubmitHandler} />
      <Expenses
        expenses={getSelectedExp()}
        years={years}
        onSelectionChangedHandler={onSelectionChangedHandler}
      />
    </div>
  );
}

export default App;
