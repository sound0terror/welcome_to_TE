import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const MainComponent = memo(() => {
    const userData = useSelector(reduxState => reduxState.userData, shallowEqual); // subscribe and get only userData object

    // ... other code
});
