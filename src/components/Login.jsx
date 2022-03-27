import { useDispatch } from "react-redux";

import { useState } from "react";
import { toggleAuth } from "../redux/auth/action";

import { useNavigate } from "react-router-dom";

export const Login = () => {

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email : "", 
        password : ""
    });

    function handleChange(e){
        setInput({
            ...input, [e.target.id] : e.target.value
        });
    }

    function handleSubmit(){
        localStorage.setItem("loggedUser", JSON.stringify(input));
        dispatch(toggleAuth(true));
        Navigate("/");
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
        }}>
            <input type="email" id="email" placeholder="enter email" value = {input.email} onChange={(e)=>{
                handleChange(e);
            }}/>
            <input type="password" id="password" placeholder="enter password" value = {input.password} onChange={(e) => {
                handleChange(e);
            }} /> 
            <input type = "submit" value="Login" />
        </form>
    );
}