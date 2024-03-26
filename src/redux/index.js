import { configureStore } from "@reduxjs/toolkit";
import { addTodoReducer } from "./reducer";

const store = configureStore({
  reducer: {
    todo: addTodoReducer.reducer
  },
});

export default store;