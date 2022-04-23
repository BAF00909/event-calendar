import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks';
import { privetRouters, publicRouters, RouteNames } from '../routers';

const AppRoute: FC = () => {
    const isAuth = useTypeSelector(state=>state.auth.isAuth);
    return (
        isAuth ?
            <Routes>
                {privetRouters.map(route => <Route path={route.path} key={route.path} element={<route.component />}></Route>)}
                <Route path="*" element={<Navigate replace to={RouteNames.HOME} />} />
            </Routes>
            :
            <Routes>
                {publicRouters.map(route => <Route path={route.path} key={route.path} element={<route.component />}></Route>)}
                <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
            </Routes>
    );
};

export default AppRoute;

