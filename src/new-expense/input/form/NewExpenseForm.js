import './NewExpenseForm.css';

const NewExpenseForm = () => {

  const titleChangeHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
};

export default NewExpenseForm;