// a component in React is just a JS function!
import { useState } from 'react';
import ExpenseDate from './date/ExpenseDate';
import ExpensePrice from './price/ExpensePrice';
import Card from '../../../shared/card/CardDisplay';
import './ExpenseItem.css'


const ExpenseItem = (props) => {

  const expenseTitle = props.expense.title;
  const [titleName, setTitle] = useState(expenseTitle);

  //const t = useState(expenseTitle)[0];
  //const f = useState(expenseTitle)[1];


  const onClick = (e) => {
    changeTitleClick(e,'New title' +  Math.random())
  };

  const changeTitleClick = (e, params) => {
    console.log("clicked")
    setTitle(params);
  }

  return (
    <Card className="expense-item" shouldShowCount={ true }>
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <ExpensePrice info={props.expense}></ExpensePrice>
      <div>
        { titleName }
      </div>
      <button onClick={ onClick }> Change Title </button>
    </Card>
  )
}

export default ExpenseItem;

