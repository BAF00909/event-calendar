import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth:boolean;
    user:IUser;
    isLoading:boolean;
    error:string;
}

export enum AuthActionsTypes {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
    type: AuthActionsTypes.SET_AUTH;
    payload:boolean
}

export interface SetErrorAction {
    type: AuthActionsTypes.SET_ERROR;
    payload:string
}

export interface SetUserAction{
    type: AuthActionsTypes.SET_USER;
    payload:IUser
}

export interface SetIsLoadingAction {
    type: AuthActionsTypes.SET_IS_LOADING;
    payload:boolean
}

export type AuthAction = SetAuthAction | SetErrorAction | SetUserAction | SetIsLoadingAction;