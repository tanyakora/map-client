import React, { Component } from 'react';
import { connect } from 'react-redux';

import {MapPreviewItemRenderer} from '../../components';

import {
    addSelectedMap
} from '../../state';

class MapListPreviewContainer extends Component {

    constructor(props){
        super(props);

        this.onClickItem = this.onClickItem.bind(this);
    }


    onClickItem( id ) {
        const {addSelectedMap} = this.props;
        addSelectedMap({id:id});
    }

  render() {

      const {maps} = this.props;

      return (
         <div>
             {maps && maps.map((item, index) =>
                 <MapPreviewItemRenderer
                     key={`map_item_preview_${index}`}
                     onClickItem={this.onClickItem.bind(this, item.get('id'))}
                     item={item}
                 /> )}
         </div>
      )
  }
}

const mapStateToProps = (state) => ({
    maps : state.mapStore.get('maps'),
});

const mapDispatchToProps = (dispatch) => ({
    addSelectedMap: options => dispatch({type: addSelectedMap.SUCCESS, payload:options}),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapListPreviewContainer);