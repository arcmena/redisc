import * as React from 'react';

import { useProtectedQuery } from '../../../lib/protected.graphql';

const ProtectedRoute = () => {
    const { data, loading, error } = useProtectedQuery();

    if (loading) {
        return <div>loading...</div>;
    }

    if (error) {
        console.log(error);
        return <div>Error! You are not authorized!</div>;
    }

    if (!data) {
        return <div>no datas</div>;
    }

    return <div>{data.protected}</div>;
};

export default ProtectedRoute;
