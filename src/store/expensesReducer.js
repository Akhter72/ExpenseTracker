const ADD = "ADD";
const SET = "SET"
const UPDATE = "UPDATE";
const DELETE = "DELETE";

export function addExpense(data) {
    console.log(data);
    return {
        type: ADD,
        payload: data,
    }
}

export function setReduxExpenses(expenses) {
    // console.log(expenses);
    return {
        type: SET,
        payload: expenses,
    }
}

export function updateExpense(id, data) {
    return {
        type: UPDATE,
        payload: {
            id: id,
            data: expense,
        }
    }
}

export function deleteExpense(id) {
    return {
        type: DELETE,
        id: id,
    }
}

const initialState = {
    expenses: [],
}

export default function expensesReducer(state=initialState, action) {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                expenses: [action.payload, ...state], 
            }
        case SET: 
            const inverted = action.payload.reverse();
            return {
                ...state,
                expenses: inverted,
            }
        case UPDATE:
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case DELETE:
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}