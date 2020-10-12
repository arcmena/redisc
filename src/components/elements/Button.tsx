import * as React from 'react';

// Interface
import { ButtonProps } from '../../types/ElementProps';

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    const btntype = type === 'submit' ? type : 'button';

    return (
        <>
            <button type={btntype}>{children}</button>
        </>
    );
};

export default Button;
