import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodos, completeTodos } from "../redux/reducer";

const DisplayTodos = () => {
  const { todo: todos } = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div className="displaytodos">
      <ul>
        {todos.length > 0 &&
          todos.map((item) => (
            <li key={item.id} className={`card ${item.completed ? 'completed-task' : ''}`}>
              <div>{item.task}</div>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div className="btns">
                {!item.completed && (
                  <button onClick={() => dispatch(completeTodos(item.id))}>
                  Mark Completed
                </button>
                )}
                <button onClick={() => dispatch(removeTodos(item.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DisplayTodos;
