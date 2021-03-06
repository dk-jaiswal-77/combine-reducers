// import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {Todo} from "./components/Todo";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Routes >
        <Route path="/" element={<Todo />} />
        < Route path = "/login" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
