import './NewExpense.css';
import NewExpenseForm from './form/NewExpenseForm';
import { useState } from "react";


const NewExpense = (props) => {

  let [addNewExpenseShown, updateAddNewExpenseShownState] = useState({
    showForm: false,
    unfinishedEntry: {},
    usePrevious: false
  });

  const saveExpenseHandler = (expenseData) => {
    const expenseWithId = {
      ...expenseData,
      id: Math.random()
    };
    updateAddNewExpenseShownState((prevState) => {
      return {
        ...prevState,
        showForm: false,
        usePrevious: false,
        unfinishedEntry: {}
      };
    });
    props.onAddExpense(expenseWithId);
  };

  const addNewExpenseClickHandler = () => {
    updateAddNewExpenseShownState((prevState) => {
      return {
        ...prevState,
        showForm: !prevState.showForm,
        usePrevious: false
      };
    });
  };

  const resumeExpenseClickHandler = () => {
    updateAddNewExpenseShownState((prevState) => {
      return {
        ...prevState,
        showForm: !prevState.showForm,
        usePrevious: true
      };
    });
  };

  const formCancelHandler = (res) => {
    updateAddNewExpenseShownState((prevState) => {
      return {
        ...prevState,
        showForm: false,
        unfinishedEntry: {
          ...res
        }
      };
    });
  };

  return (
    <div className="new-expense">
      { addNewExpenseShown.showForm ? 
        (<NewExpenseForm onFormSubmit={ saveExpenseHandler } test={ 'Test string' }
        onFormCancel={ formCancelHandler } prevEntry={ addNewExpenseShown.unfinishedEntry } 
        usePrevEntry={ addNewExpenseShown.usePrevious }></NewExpenseForm>) 
      : 
        (
          <div>
            { Object.keys(addNewExpenseShown.unfinishedEntry).length > 0 && 
              <button onClick={ resumeExpenseClickHandler }>Resume Last Expense</button>
            }
            <button onClick={ addNewExpenseClickHandler }>Add New Expense</button>
          </div>
        )
        
      }
      
    </div>
  );

};

export default NewExpense;