import React, { FC, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useActions, useTypeSelector } from '../hooks';
import { rules } from '../utils';


const LoginForm: FC = () => {

    const [loginUser, setLoginUser] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useActions();
    const { isLoading, error } = useTypeSelector(state => state.auth);

    const submit = () => {
        login(loginUser, password);
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            className='login_form'
            onFinish={submit}
        >
            <Form.Item
                label="Логин"
                name="username"
                rules={[rules()]}
            >
                <Input value={loginUser} onChange={(e) => setLoginUser(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules()]}
            >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Вход
                </Button>
            </Form.Item>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </Form>

    );
};

export default LoginForm;