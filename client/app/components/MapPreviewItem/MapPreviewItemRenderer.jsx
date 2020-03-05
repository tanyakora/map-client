import React from 'react';
import {Icon} from 'react-fa';

const MapPreviewItemRenderer = ({item, onClickItem, onIncOpacityClick, onDecOpacityClick, onDeleteClick}) => (

    <span className="col-lg-12 item-preview border" onClick={onClickItem}>

        <img src={`img/preview/${item.get('src')}`} style={{ width: 100, height: 100, paddingRight:10}}/>

        {onDecOpacityClick && <button type="button" title='Тусклее'  style={{ color: 'blue' }} onClick={onDecOpacityClick} >  <Icon name="backward "></Icon>  </button>}
        {onIncOpacityClick && <button type="button" title='Ярче'  style={{ color: 'blue' }} onClick={onIncOpacityClick} >  <Icon name="forward "></Icon>  </button>}
        {onDeleteClick && <button type="button" title='Удалить'  style={{ color: 'red' }} onClick={onDeleteClick} >  <Icon name="trash-o"></Icon>  </button>}

    </span>

);


export default MapPreviewItemRenderer;