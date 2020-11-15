import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from '../../types/ElementProps';

const FormItem: React.FC<FormItemProps> = ({
    children,
    label,
    name,
    rules,
}) => (
    <Form.Item label={label} name={name} rules={rules}>
        {children}
    </Form.Item>
);

export default FormItem;
