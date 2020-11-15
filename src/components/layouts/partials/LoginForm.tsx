import * as React from 'react';
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';

// Components
import Button from '../../elements/Button';
import Form from '../../elements/Form';
import FormItem from '../../elements/FormItem';

// Interfaces
import { BasicFormProps } from '../../../types/LayoutProps';

const LoginForm: React.FC<BasicFormProps> = ({ onFinish }) => {
    return (
        <Form name="auth" onFinish={onFinish}>
            <FormItem
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="email"
                    placeholder="E-Mail"
                />
            </FormItem>
            <FormItem
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </FormItem>
            <FormItem>
                <Button type="primary" btnRole="submit">
                    Login
                </Button>
                Or{' '}
                <Link as="/account/register" href="/account/register">
                    register now!
                </Link>
            </FormItem>
        </Form>
    );
};

export default LoginForm;
