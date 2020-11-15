import * as React from 'react';

import FooterComponent from './Styles';

import LogoExtended from '../../../assets/img/logo-extended.svg';

const Footer: React.FC = () => {
    return (
        <FooterComponent>
            <img src={LogoExtended} alt="logo" />
        </FooterComponent>
    );
};

export default Footer;
