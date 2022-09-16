import { useState } from "react";
import Expenses from './expenses/Expenses';
import NewExpense from "./new-expense/input/NewExpense";


function App() {

  const expenses = [
    {
      id: 'e11',
      title: 'IKEA trip',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    {
      id: 'e12',
      title: 'Boba tea',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e13',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenses] = useState(expenses);

  const formSubmitHandler = (expenseData) => {
    console.log(expenseData);
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
