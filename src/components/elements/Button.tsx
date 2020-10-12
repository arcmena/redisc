import * as React from 'react';

// Interface
import { ButtonProps } from '../../types/ElementProps';

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    type === 'submit' ? type : 'button';

    return (
        <>
            <button type={type}>{children}</button>
        </>
    );
};

export default Button;
