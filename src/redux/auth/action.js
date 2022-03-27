export const TOGGLE_AUTH = "TOGGLE_AUTH";

export function toggleAuth(payload){
    localStorage.setItem("authState", JSON.stringify(payload));
    return {type : TOGGLE_AUTH, payload};
}