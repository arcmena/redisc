import * as React from 'react';
import { Button as Component } from 'antd';

// Interface
import { ButtonProps } from '../../types/ElementProps';

const Button: React.FC<ButtonProps> = ({
    children,
    type,
    loading,
    btnRole,
}) => {
    return (
        <Component type={type} loading={loading} htmlType={btnRole}>
            {children}
        </Component>
    );
};

export default Button;
