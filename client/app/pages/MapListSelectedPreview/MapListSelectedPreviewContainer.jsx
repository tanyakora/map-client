import React, { Component } from 'react';
import { connect } from 'react-redux';

import {MapPreviewItemRenderer} from '../../components';

import {
    onChangeOpacityMap,
    removeSelectedMap
} from '../../state';

class MapListSelectedPreviewContainer extends Component {

    constructor(props){
        super(props);

        this.onClickItem = this.onClickItem.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDecOpacityClick = this.onDecOpacityClick.bind(this);
        this.onIncOpacityClick = this.onIncOpacityClick.bind(this);
    }


    onClickItem( num ) {
    }

    onIncOpacityClick( num ) {
        const {onChangeOpacityMap} = this.props;
        onChangeOpacityMap({num:num, koef:1});
    }

    onDecOpacityClick( num ) {
        const {onChangeOpacityMap} = this.props;
        onChangeOpacityMap({num:num, koef:-1});
    }

    onDeleteClick( num ) {
        const {removeSelectedMap} = this.props;
        removeSelectedMap({num:num});
    }

  render() {

      const {selectedMaps} = this.props;

      return (
         <div>
             {selectedMaps && selectedMaps.map((item, index) =>
                 <MapPreviewItemRenderer
                     key={`map_item_selected_preview_${index}`}
                     onClickItem={this.onClickItem.bind(this, item.get('num'))}
                     onIncOpacityClick={this.onIncOpacityClick.bind(this, item.get('num'))}
                     onDecOpacityClick={this.onDecOpacityClick.bind(this, item.get('num'))}
                     onDeleteClick={this.onDeleteClick.bind(this, item.get('num'))}
                     item={item}
                 /> )}
         </div>
      )
  }
}

const mapStateToProps = (state) => ({
    selectedMaps : state.mapStore.get('selectedMaps'),
});

const mapDispatchToProps = (dispatch) => ({
    onChangeOpacityMap: options => dispatch({type: onChangeOpacityMap.SUCCESS, payload:options}),
    removeSelectedMap: options => dispatch({type: removeSelectedMap.SUCCESS, payload:options}),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapListSelectedPreviewContainer);