import { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

  const currentDate = new Date().toISOString().split('T')[0];

  let [expenseFormEnteredData, setExpenseData] = useState({
    title: 'Cool expense',
    amount: 0,
    date: currentDate
  });

  const formChangeHander = (e) => {
    setExpenseData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      };
    });
  };

  const generateRandomFormData = () => {
    const title = Math.random() > 0.5 ? 'Phone bills' : 'Gas bills';
    const amount = (Math.random() + '').split('.')[1].slice(0, 3);
    const date = new Date().toISOString().split('T')[0];

    expenseFormEnteredData = {
      title,
      amount,
      date
    };

    setExpenseData((prevState) => {
      return {
        ...prevState,
        ...expenseFormEnteredData
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(expenseFormEnteredData);
    setExpenseData((prevState) => {
      return {
        ...prevState,
        title: '',
        amount: 0,
        date: ''
      };
    });
  };

  return (
    <div>
      <form onChange={ formChangeHander } onSubmit={ formSubmit }>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" id="title" value={ expenseFormEnteredData.title } onChange={ ()=>{} }></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" id="amount" value={ expenseFormEnteredData.amount } onChange={ ()=>{} }></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" id="date" value={ expenseFormEnteredData.date } onChange={ ()=>{} }></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <div>
            <button type="button" onClick={ generateRandomFormData }>Random</button>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {JSON.stringify(expenseFormEnteredData)}
      </div>
    </div>
    
  );
};

export default NewExpenseForm;