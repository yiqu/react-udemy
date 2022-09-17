import './ExpensePrice.css';

export function ExpensePrice(props) {

  return (
    <div className='expense-item__description'>
      <h2>
        { props.info.title }
      </h2>
      <div className='expense-item__price'>
        ${ +(props.info.amount) }
      </div>
    </div>
  );
}

export default ExpensePrice;