import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// Components
import LoginForm from '../../components/layouts/partials/LoginForm';

// Interfaces
import { UserFormData } from '../../types/FormTypes';

// Mutations
import { useLoginMutation } from '../../types/graphql';

const Login: React.FC = () => {
    const [data, setData] = useState<UserFormData>({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState();

    const [auth] = useLoginMutation();

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await auth({
            variables: {
                email: data.email,
                password: data.password,
            },
        })
            .then(() => {
                alert(`Successfully Logged In!`);
                Router.push('/');
            })
            .catch((error) => {
                console.error(error);
                setErrorMessage(error.message);
            });
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
