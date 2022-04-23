import React, { FC } from 'react';
import { Layout, Row, Menu, } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routers';
import { useActions, useTypeSelector } from '../hooks';


const NavBar: FC = () => {
    const history = useNavigate();
    const {isAuth, user} = useTypeSelector(state=>state.auth);
    const {logout} = useActions();

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth ?
                    <>
                        <div style={{ color: '#fff', padding: '0 15px' }}>{user.login}</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        >
                            <Menu.Item
                                key="login"
                                onClick={logout}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        >
                            <Menu.Item
                                key="login"
                                onClick={() => history(RouteNames.LOGIN)}
                            >
                                Логин
                            </Menu.Item>
                        </Menu>
                    </>

                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;