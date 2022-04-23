import React, { FC, useEffect } from 'react';
import './App.css';
import AppRoute from './components/AppRouter';
import NavBar from './components/NavBAr';
import { Layout } from 'antd';
import { useActions } from './hooks';
import { IUser } from './models/IUser';

const App: FC = () => {
	const {setUser, setIsAuth} = useActions();
	useEffect(()=>{
		if(localStorage.getItem('auth')) {
			setUser({login:localStorage.getItem('userName' || '')} as IUser);
			setIsAuth(true);
		}
	},[])
	return (
		<Layout>
			<NavBar />
			<Layout.Content>
				<AppRoute />
			</Layout.Content>
		</Layout>
	);
}

export default App;
