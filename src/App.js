import { useState } from "react";
import Expenses from './expenses/Expenses';
import NewExpense from "./new-expense/input/NewExpense";
import * as SAMPLE_LIST from './expenses-example-list';

function App() {
  const expenses = SAMPLE_LIST.EXPENSES_SAMPLE_LIST;

  const [expenseList, setExpenses] = useState(expenses);

  const formSubmitHandler = (expenseData) => {
    setExpenses((prevState) => {
      const prev = [...prevState];
      prev.unshift({
        ...expenseData,
        date: new Date(expenseData.date)
      });
      return prev;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={ formSubmitHandler }></NewExpense>
      <Expenses items={ expenseList }></Expenses>
    </div>
  );
}

export default App;
