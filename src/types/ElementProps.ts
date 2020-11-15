import { Rule } from 'antd/lib/form';
import { ProductOverview } from './EntityTypes';

export interface InputProps {
    type?: string;
    name?: string;
}

export interface ButtonProps {
    type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed';
    loading?: boolean;
    btnRole?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

export interface FormProps {
    name: string;
    onFinish?: (values: any) => void;
    children: React.ReactNode;
}

export interface FormItemProps {
    label?: string;
    name?: string;
    rules?: Rule[];
}

export interface ProductCardProps {
    product: ProductOverview;
}
