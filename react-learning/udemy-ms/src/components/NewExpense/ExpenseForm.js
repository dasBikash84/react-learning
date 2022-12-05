import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(0.0);
  // const [enteredDate, setEnteredDate] = useState(null);

  const [showAddBlock, setShowAddBlock] = useState(false);

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      // console.log('prevState', prevState);
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      // console.log('prevState', prevState);
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      // console.log('prevState', prevState);
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  // console.log('enteredTitle', enteredTitle);
  // console.log('enteredAmount', enteredAmount);
  // console.log('entereenteredDatedTitle', enteredDate);

  function onSubmitHandler(event) {
    event.preventDefault();
    // console.log('userInput', userInput);
    props.onExpenseSubmit({
      ...userInput,
      date: new Date(userInput.date),
    });
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  }

  // console.log('userInput', userInput);

  const onShowAddBlock = () => {
    setShowAddBlock(true);
  };

  const onCancelClick = () => {
    setShowAddBlock(false);
  };

  if (!showAddBlock) {
    return (
      <div className="new-expense__control">
        <button onClick={onShowAddBlock}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
