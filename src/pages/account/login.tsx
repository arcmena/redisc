import * as React from 'react';
import { useState, useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// Components
import LoginForm from '../../components/layouts/partials/LoginForm';

// Interfaces
import { UserFormData } from '../../types/FormTypes';

// Context
import { AuthContext } from '../../contexts/AuthContext';

const Login: React.FC = () => {
    const { login } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (values: UserFormData) => {
        console.log(values);

        const res = await login(values);

        if (typeof res === 'string') return setErrorMessage(res);

        alert(`Successfully Logged In!`);
        return Router.push('/');
    };

    return (
        <div>
            <Link as="/" href="/">
                Back
            </Link>
            <div>
                <LoginForm onFinish={handleSubmit} />
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Login;
