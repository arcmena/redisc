import { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
}

const Component = styled('button')<ButtonProps>`
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.7rem;
    font-weight: 600;

    border: 1px solid ${({ theme }) => theme.colors.black};

    padding: 1.7rem 3rem;

    width: 100%;

    text-transform: uppercase;

    cursor: pointer;

    &:focus {
        outline: none;
    }

    transition: all 0.4s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
    }
`;

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return <Component {...rest}>{children}</Component>;
};

export default Button;
