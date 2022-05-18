import React, { useState, memo } from 'react';

const Block = memo(({mouseEnterCallback, children}) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallback();
    }

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            {children}
        </div>
    )

})
