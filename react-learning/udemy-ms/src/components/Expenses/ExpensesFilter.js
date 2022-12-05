import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectionChanged(event.target.options.selectedIndex);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeHandler}>
          {props.years.map((y) => (
            <option value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
