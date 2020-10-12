export interface InputProps {
    label: string;
    type: string;
    name: string;
}

export interface ButtonProps {
    type: 'submit' | 'button';
    children: React.ReactNode;
}
