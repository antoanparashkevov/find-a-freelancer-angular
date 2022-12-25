import {User} from "../models/user.model";
import * as authActions from "./auth.actions";

export interface AuthState {
    user: User | null
}

const initialState: AuthState = {
    user: null
}

export function authReducer(
    state: AuthState = initialState,
    action: authActions.AuthActions
): AuthState {
    switch (action.type) {
        case authActions.LOGIN:
            const user = new User(action.payload.email, action.payload.id,action.payload.token)
            return {
                ...state,
                user: user
            }
        case authActions.LOGOUT:
            return {
                ...state,
                user: null
            }
        default: 
            return state
    }
}