import React from 'react';
import { Form as Component } from 'antd';

// PropsInterface
import { FormProps } from '../../types/ElementProps';

const Form: React.FC<FormProps> = ({ children, name, onFinish }) => {
    return (
        <Component name={name} onFinish={onFinish}>
            {children}
        </Component>
    );
};

export default Form;
