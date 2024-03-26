import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";
import { motion } from "framer-motion";

const Todos = () => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const add = () => {
    const phoneRegex = /^\+?[0-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !phoneRegex.test(phone) || !emailRegex.test(email) || !name ||  !task ||task.length < 5 || task.length > 254 ) {
      alert(
        "Please fill in all fields correctly. Make sure task length is between 5 and 254 characters, phone number is 10 digits, and email contains '@'"
      );
    } else {
      dispatch(addTodos({
          id: Math.floor(Math.random() * 1000),
          task: task,
          name: name,
          email: email,
          phone: phone,
          completed: false,
        })
      );
      setTask("");
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <form className="addTodos" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={(e) => handleChange(e, setTask)}
        className="in"
        value={task}
        placeholder="Note (min5 max254)"
      />
      <input
        type="text"
        onChange={(e) => handleChange(e, setName)}
        className="todo-input"
        value={name}
        placeholder="Name"
      />
      <input
        type="email"
        onChange={(e) => handleChange(e, setEmail)}
        className="todo-input"
        value={email}
        placeholder="Email"
      />
      <input
        type="tel"
        onChange={(e) => handleChange(e, setPhone)}
        className="todo-input"
        value={phone}
        placeholder="Phone"
      />
      <div className="buttons">
        <AnimatedButton className="add-btn" type="submit" onClick={() => add()}>
          Submit
        </AnimatedButton>
      </div>
      <br />
    </form>
  );
};

const AnimatedButton = motion.button;

export default Todos;
