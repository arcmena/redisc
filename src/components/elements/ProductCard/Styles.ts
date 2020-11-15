import styled from 'styled-components';

import { Card as CardComponent } from 'antd';
import { CardProps } from 'antd/lib/card';

export const Card: React.FC<CardProps> = styled(CardComponent)`
    width: 250px;
`;

export const CardMeta: React.FC<CardProps> = styled(CardComponent.Meta)``;
