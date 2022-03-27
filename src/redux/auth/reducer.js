import { TOGGLE_AUTH } from "./action";

export const authReducer = (authState = {authState : JSON.parse(localStorage.getItem("authState")) || false}, {type, payload}) => {
    switch(type){
        case TOGGLE_AUTH :
            return {authState : payload};
        default :
            return authState;
    }
} 