import { ADD_TODO } from "./action";

export const todoReducer = (todo = {todo : []}, {type, payload})=>{
    switch(type){
        case ADD_TODO : 
            return {todo : [...todo.todo, payload]};
        default :
            return todo;
    }
}