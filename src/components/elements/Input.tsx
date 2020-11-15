import * as React from 'react';
import { Input as Component } from 'antd';
import { InputProps } from 'antd/lib/input';

// Interface
// import { InputProps } from '../../types/ElementProps';

const Input: React.FC<InputProps> = ({ type, name }, ...rest) => {
    return <Component type={type} name={name} {...rest} />;
};

export default Input;
