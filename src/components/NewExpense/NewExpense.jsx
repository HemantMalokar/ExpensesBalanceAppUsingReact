import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    function startEditingHandler() {
        setIsEditing(true)
    };

    function stopEditingHanlder() {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={stopEditingHanlder} />}
        </div>
    );

};

export default NewExpense;