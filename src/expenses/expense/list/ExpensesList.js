import './ExpensesList.scss';
import ExpenseItem from '../item/ExpenseItem';

const ExpensesList = (props) => {

  const list = props.list;

  let expensesContent = <h2 className="expenses-list__fallback">No items found</h2>;

  if (list.length > 0) {
    expensesContent = list.map((expense, index) => {
      return <ExpenseItem key={ expense.id } expense={ expense } expenseIndex={ index }></ExpenseItem>;
    });
  }
  return (
    <ul className="expenses-list">
      { expensesContent }
    </ul>
  );

};

export default ExpensesList;