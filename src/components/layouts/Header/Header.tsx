import * as React from 'react';
import Link from 'next/link';

import { HeaderComponent, Nav } from './Styles';

import LogoMinimal from '../../../assets/img/logo-minimal.svg';

const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <div>
                <div>
                    <Link as="/" href="/">
                        <img src={LogoMinimal} alt="logo" />
                    </Link>
                    <Nav>
                        <Link as="/account/register" href="/account/register">
                            Create an Account
                        </Link>

                        <br />

                        <Link as="/account/login" href="/account/login">
                            Login
                        </Link>
                    </Nav>
                </div>
            </div>
        </HeaderComponent>
    );
};

export default Header;
