import React from 'react';
import Home from '../pages/home';
import Login from '../pages/login';

export interface IRoute {
    path:string;
    component:React.ComponentType;
    exact?:boolean
}

export enum RouteNames {
    LOGIN = '/login',
    HOME = '/'
}

export const publicRouters:IRoute[] = [
    {path: RouteNames.LOGIN, exact:true, component:Login}
]

export const privetRouters:IRoute[] = [
    {path:RouteNames.HOME, exact:true, component:Home}
]