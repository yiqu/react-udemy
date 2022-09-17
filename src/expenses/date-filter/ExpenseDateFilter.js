// import React from 'react';
import { useState } from "react";
import './ExpenseDateFilter.scss';


const ExpenseDateFilter = (props) => {

  const currentYear = props.yearToSelect ?? '2020';
  let yearOptions = ['all', '2022', '2021', '2020', '2019', '2018'];
  yearOptions = yearOptions.map((year) => {
    return <option value={ year } key={ year }>{year}</option>;
  });
  
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
          { yearOptions }
        </select>
      </div>
    </div>
  );
};

export default ExpenseDateFilter;