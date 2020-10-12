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

    const [data, setData] = useState<UserFormData>({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await login(data);

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
                <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Login;
