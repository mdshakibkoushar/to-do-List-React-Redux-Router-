import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <h2>To-do List</h2>
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Navbar />
        <Routes>
  
       {/* <Todos />  */}
       <Route path="/" element={<Todos/>} />
       <Route path="/Todo" element={<DisplayTodos  />} />
     
       </Routes>

      </motion.div>

    </div>
  );
}

export default App;