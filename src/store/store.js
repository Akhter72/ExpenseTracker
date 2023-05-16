import { combineReducers, createStore } from "redux";
import expensesReducer from "./expensesReducer";

const comReducers = combineReducers({
    expenses: expensesReducer,
})

export const store = createStore(expensesReducer);
