import { configureStore } from "@reduxjs/toolkit";
import { addTodoReducer } from "./todoReducer";

const store = configureStore({
  reducer: {
    todo: addTodoReducer.reducer
  },
});

export default store;
