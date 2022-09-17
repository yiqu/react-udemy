import Card from '../shared/card/CardDisplay';
import ExpenseDateFilter from './date-filter/ExpenseDateFilter';
import './Expenses.css';
import ExpensesList from './expense/list/ExpensesList';
import ExpensesChart from './expenses-chart/ExpensesChart';
import { useState } from "react";

const Expenses = (props) => {

  let items = props.items ?? [];

  const [filteredYear, setFilteredYear] = useState({
    filteredYear: 'all'
  });

  items = items.filter((res) => {
    const year = res.date.getFullYear() + '';
    if (filteredYear.filteredYear === 'all' || year === filteredYear.filteredYear) {
      return true;
    }
    return false;
  });


  const yearFilterHandler = (yearSelected) => {
    setFilteredYear((prevState) => {
      return {
        ...prevState,
        filteredYear: yearSelected
      };
    });
  };

 

  return (
    <div>
      <Card className="expenses" shouldShowCount={ false }>
        <ExpensesChart items={ items }></ExpensesChart>
      </Card>

      <Card className="expenses" shouldShowCount={ false }>

        <div className="white">{JSON.stringify(filteredYear)}</div>

        <ExpenseDateFilter onYearFilter={ yearFilterHandler } yearToSelect={ filteredYear.filteredYear } />

        <ExpensesList list={ items } />

      </Card>
    </div>
    
  );
};

export default Expenses;