import * as React from 'react';

// Components
import Input from '../../elements/Input';
import Button from '../../elements/Button';

// Interfaces
import { BasicFormProps } from '../../../types/LayoutProps';

const RegisterForm: React.FC<BasicFormProps> = ({ onChange, onSubmit }) => {
    return (
        <form onChange={onChange} onSubmit={onSubmit} className="form">
            <Input type="text" name="name" />
            <Input type="email" name="email" />
            <Input type="password" name="password" />
            <Button btnRole="submit">Submit</Button>
        </form>
    );
};

export default RegisterForm;
