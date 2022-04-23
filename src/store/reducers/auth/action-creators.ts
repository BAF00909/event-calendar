import axios from 'axios';
import { AppDispatch } from '../../index';
import { IUser } from '../../../models/IUser';
import {AuthActionsTypes, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from './types';
import { UserService } from '../../../api/UserService';
export const AuthActionCreators = {
    setUser: (user:IUser):SetUserAction => ({type:AuthActionsTypes.SET_USER, payload:user}),
    setIsAuth: (auth:boolean):SetAuthAction => ({type:AuthActionsTypes.SET_AUTH, payload:auth}),
    setError: (message:string):SetErrorAction => ({type:AuthActionsTypes.SET_ERROR, payload:message}),
    setIsLoading: (load:boolean):SetIsLoadingAction => ({type:AuthActionsTypes.SET_IS_LOADING, payload:load}),
    login: (username:string, password:string):any => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async ()=>{
                const response = await UserService.getGuests();
                const mock = response.data.find((item) => item.login === username && item.password === password);
                if(mock){
                    localStorage.setItem('auth','true');
                    localStorage.setItem('userName', mock.login);
                    dispatch(AuthActionCreators.setUser(mock));
                    dispatch(AuthActionCreators.setIsAuth(true));
                }else{
                    dispatch(AuthActionCreators.setError('User not found!'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            },1000);
        } catch (error) {
            dispatch(AuthActionCreators.setError('something wring!'));
        }
    },
    logout: ():any => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth');
            localStorage.removeItem('userName');
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setIsAuth(false));
        } catch (error) {
            
        }
    }
}