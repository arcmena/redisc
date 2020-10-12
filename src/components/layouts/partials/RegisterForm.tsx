import * as React from 'react';

// Components
import Input from '../../elements/Input';
import Button from '../../elements/Button';

// Interfaces
import { RegisterFormProps } from '../../../types/LayoutProps';

const RegisterForm: React.FC<RegisterFormProps> = ({ onChange, onSubmit }) => {
    return (
        <form onChange={onChange} onSubmit={onSubmit} className="form">
            <Input label="Name" type="text" name="name" />
            <Input label="Email" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default RegisterForm;
