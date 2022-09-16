import './NewExpense.css';
import NewExpenseForm from './form/NewExpenseForm';


const NewExpense = (props) => {

  const saveExpenseHandler = (expenseData) => {
    const expenseWithId = {
      ...expenseData,
      id: Math.random()
    };
    props.onAddExpense(expenseWithId);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onFormSubmit={ saveExpenseHandler } test={ 'Test string' }></NewExpenseForm>
    </div>
  );

};

export default NewExpense;