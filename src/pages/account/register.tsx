import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

// Components
import RegisterForm from '../../components/layouts/partials/RegisterForm';

// Mutations
import { useRegisterMutation } from '../../types/graphql';

// Interfaces
import { UserFormData } from '../../types/FormTypes';

const Home: React.FC = () => {
    const [data, setData] = useState<UserFormData>({
        name: '',
        email: '',
        password: '',
    });

    const [register] = useRegisterMutation();

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await register({
            variables: {
                name: data.name,
                email: data.email,
                password: data.password,
            },
        })
            .then(() => {
                alert(`Form Submitted!`);
                Router.push('/');
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Link as="/" href="/">
                Back
            </Link>
            <div>
                <RegisterForm onChange={handleChange} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Home;
