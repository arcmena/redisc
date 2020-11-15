import styled from 'styled-components';

import { Card as CardComponent } from 'antd';
import { CardProps, CardMetaProps } from 'antd/lib/card';

export const Card: React.FC<CardProps> = styled(CardComponent)`
    width: 250px;

    .ant-card-body {
        padding: 1rem;
        text-align: center;

        h3 {
            margin: 0;
        }

        span {
            color: ${(props) => props.theme.colors.gray};
        }

        h4 {
            color: ${(props) => props.theme.colors.primary_1};
            font-weight: 500;
            margin: 0;
        }
    }
`;

export const CardMeta: React.FC<CardMetaProps> = styled(CardComponent.Meta)``;
