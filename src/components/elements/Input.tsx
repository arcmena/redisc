import * as React from 'react';

// Interface
import { InputProps } from '../../types/ElementProps';

const Input: React.FC<InputProps> = ({ label, type, name }) => {
    const Component = type === 'textarea' ? type : 'input';

    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}

            <div className="input-outside">
                <Component type={type} name={name} />
            </div>
        </>
    );
};

export default Input;
