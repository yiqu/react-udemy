import ExpenseItem from './expense/item/ExpenseItem';
import Card from '../shared/card/CardDisplay';
import './Expenses.css';

const Expenses = (props) => {

  const items = props.items;

  return (
    <Card className="expenses" shouldShowCount={false}>
      <ExpenseItem expense={items[0]}></ExpenseItem>
      <ExpenseItem expense={items[1]}></ExpenseItem>
      <ExpenseItem expense={items[2]}></ExpenseItem>
      <ExpenseItem expense={items[3]}></ExpenseItem>
    </Card>
  )
}

export default Expenses;