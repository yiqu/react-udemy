// a component in React is just a JS function!

import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>
        1/1/2022
      </div>
      <div className='expense-item__description'>
        <h2>
          Car
        </h2>
        <div className='expense-item__price'>
          11.11
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;

