import * as React from 'react';

// Components
import Input from '../../elements/Input';
import Button from '../../elements/Button';

// Interfaces
import { BasicFormProps } from '../../../types/LayoutProps';

const LoginForm: React.FC<BasicFormProps> = ({ onChange, onSubmit }) => {
    return (
        <form onChange={onChange} onSubmit={onSubmit} className="form">
            <Input label="Email" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
