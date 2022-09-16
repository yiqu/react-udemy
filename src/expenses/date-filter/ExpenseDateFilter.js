// import React from 'react';
import { useState } from "react";
import './ExpenseDateFilter.scss';


const ExpenseDateFilter = (props) => {

  const currentYear = props.yearToSelect ?? '2020';
  const [yearState, setYearState] = useState(currentYear);

  const yearSelectHandler = (event) => {
    setYearState(event.target.value);
    props.onYearFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="control">
        <label className="label">Filter by year ({yearState})</label>

        <select onChange={ yearSelectHandler } value={ yearState }>
          <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseDateFilter;