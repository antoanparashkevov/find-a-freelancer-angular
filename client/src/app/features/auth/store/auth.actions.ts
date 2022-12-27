import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start Request'
export const LOGIN = '[Auth] Login'
export const LOGOUT = '[Auth] Logout'

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
    
    constructor(public payload: null) {}
}

export class LoginStartRequest implements Action {
    readonly type = LOGIN_START;

    constructor(public payload: {
        email: string,
        password: string
    }) {}
}

export type AuthActions = Login | Logout