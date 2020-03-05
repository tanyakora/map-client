import React from 'react';

const BlindView = ({left, onMouseDown}) => (

    <div className="blind-component" style={{left:left}}
         onMouseDown={onMouseDown} >
    </div>

);


export default BlindView;