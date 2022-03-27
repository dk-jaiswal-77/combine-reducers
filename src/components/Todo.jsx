import { useState } from "react";
import { addTodo } from "../redux/todo/action";
import { toggleAuth } from "../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Todo = () => {

    const authState = useSelector((state)=>(state.authState.authState));
    const Navigate = useNavigate();
    if(!authState)
    {
        Navigate("/login");
    }

    const dispatch = useDispatch();

    const todos = useSelector((state)=>(state.todo.todo));

    const [input, setInput] = useState("");

    function handleChange(e){
        setInput(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="enter todo" onChange={(e) => {
                handleChange(e);
            }} />
            <button onClick={()=>{
                dispatch(addTodo(input));
            }}>Add Todo</button>
            <hr />
            {todos.map((todo) => {
                return (
                    <div>{todo}</div>
                );
            })}
        </div>
    );
}