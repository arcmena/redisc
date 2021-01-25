import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import Link from 'next/link';

import { HeaderComponent, Nav } from './Styles';

import LogoMinimal from '../../../assets/img/logo-minimal.svg';

const Header: React.FC = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 0;
            const { scrollTop } = document.documentElement;
            const scrolled = scrollTop > offset;
            setHasScrolled(scrolled);
        }, 200);

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderComponent hasScrolled={hasScrolled}>
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
