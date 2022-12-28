import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start Request'
export const LOGOUT_START = '[Auth] Logout Start Request'
export const SIGNUP_START = '[Auth] Signup Start Request'
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success'
export const LOGOUT_SUCCESS = '[Auth] Logout Success'
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail'
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
    readonly type = LOGOUT_START;

    constructor(public payload?: null) {
    }
}

export class AuthenticateSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS
    
    constructor(public payload: User) {}
    
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS

}

export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL

    constructor(public payload: {message: string}) {//an error message
    }
}

export class ClearError implements Action {
    readonly type = CLEAR_ERROR;
}




export type AuthActions = AuthenticateSuccess | SignupStartRequest | LoginStartRequest | AuthenticateFail | LogoutRequest | ClearError | LogoutSuccess