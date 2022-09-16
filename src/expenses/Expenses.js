import ExpenseItem from './expense/item/ExpenseItem';
import Card from '../shared/card/CardDisplay';
import ExpenseDateFilter from './date-filter/ExpenseDateFilter';
import './Expenses.css';
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
    <Card className="expenses" shouldShowCount={ false }>

      <div className="white">{JSON.stringify(filteredYear)}</div>

      <ExpenseDateFilter onYearFilter={ yearFilterHandler } yearToSelect={ filteredYear.filteredYear } />

      { items.map((expense, index) => {
        return <ExpenseItem key={ expense.id } expense={ expense } expenseIndex={ index }></ExpenseItem>;
      }) }

    </Card>
  );
};

export default Expenses;