import { IUser } from "../../../models/IUser";
import { AuthState, AuthAction, AuthActionsTypes } from "./types";

const initialState:AuthState = {
    isAuth: false,
    user:{} as IUser,
    error:'',
    isLoading:false
}

export default function authReducer (state = initialState, action:AuthAction):AuthState {
    switch(action.type){
        case AuthActionsTypes.SET_AUTH : return {...state, isAuth:action.payload, isLoading:false};
        case AuthActionsTypes.SET_ERROR: return {...state, isLoading:false, error:action.payload};
        case AuthActionsTypes.SET_IS_LOADING: return {...state, isLoading:action.payload};
        case AuthActionsTypes.SET_USER: return {...state, isLoading:false, user:action.payload};
        default: return state;
    }
}