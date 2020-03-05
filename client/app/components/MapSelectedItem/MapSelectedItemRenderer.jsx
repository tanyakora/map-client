import React from 'react';

const MapSelectedItemRenderer = ({style, img_style, item}) => (

    <div className={`col-lg-12 item-selected`} style={{...style, opacity : item.get('opacity')}}>
        <img style={img_style} src={`img/map/${item.get('src')}`}/>

    </div>

);


export default MapSelectedItemRenderer;