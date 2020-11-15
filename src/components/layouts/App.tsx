import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const App: React.FC = ({ children }) => {
    const { validateToken } = useContext(AuthContext);

    useEffect(() => {
        validateToken();
    }, []);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default App;
