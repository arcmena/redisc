import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

const App: React.FC = ({ children }) => {
    const { validateToken } = useContext(AuthContext);

    useEffect(() => {
        validateToken();
    }, []);

    return <main>{children}</main>;
};

export default App;
