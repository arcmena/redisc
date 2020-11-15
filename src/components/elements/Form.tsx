import React from 'react';
import { Form as Component } from 'antd';

// PropsInterface
import { FormProps } from '../../types/ElementProps';

const Form: React.FC<FormProps> = ({ children, name }) => {
    return <Component name={name}>{children}</Component>;
};

export default Form;
