import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '500px', paddingTop: '5px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;