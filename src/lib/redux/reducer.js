import { combineReducers } from "redux";
import filtersSlice from "./slices/filtersSlice";
import todoListSlice from "./slices/todoListSlice";

const rootReducer = combineReducers({
  filters: filtersSlice.reducer,
  todoList: todoListSlice.reducer,
});

export default rootReducer;
