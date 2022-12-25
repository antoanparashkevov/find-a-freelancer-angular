import {Action} from "@ngrx/store";

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface User  {
    email: string,
    id: string,
    token: string
}

export class Login implements Action{
    readonly type = LOGIN
    
    constructor(public payload: User) {}
    
}

export class Logout implements Action {
    readonly type = LOGOUT;
    
    constructor(public payload: null) {
    }
}

export type AuthActions = Login | Logout