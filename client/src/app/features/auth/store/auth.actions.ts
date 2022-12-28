import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start Request'
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success'
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail'
export const SIGNUP_START = '[Auth] Signup Start Request'
export const LOGOUT = '[Auth] Logout'
export const CLEAR_ERROR = '[Auth] Clear Error'

interface User  {
    email: string,
    id: string,
    token: string
}

export class LoginStartRequest implements Action {
    readonly type = LOGIN_START;

    constructor(public payload: {
        email: string,
        password: string
    }) {}
}

export class SignupStartRequest implements Action {
    readonly type = SIGNUP_START

    constructor(public payload: {email: string, password: string}) {
    }
}

export class LogoutRequest implements Action {
    readonly type = LOGOUT;

    constructor(public payload?: null) {
    }
}

export class AuthenticateSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS
    
    constructor(public payload: User) {}
    
}

export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL

    constructor(public payload: {message: string}) {//an error message
    }
}

export class ClearError implements Action {
    readonly type = CLEAR_ERROR;
}




export type AuthActions = AuthenticateSuccess | SignupStartRequest | LoginStartRequest | AuthenticateFail | LogoutRequest | ClearError