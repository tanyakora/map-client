import React, { Component } from 'react';
import { connect } from 'react-redux';

import {MapListSelectedPreview} from '../MapListSelectedPreview';

import {
    MapSelectedItemRenderer,
} from '../../components';

import {
    removeSelectedMap
} from '../../state';

class MapListSelectedContainer extends Component {

    constructor(props){
        super(props);
    }

  render() {

      const {selectedMaps, blind_position} = this.props;

      const overlay_style={
          left:blind_position,
          overflow:'hidden',
          display: 'block',
          transitionDuration: 0.6
      };

      const img_style={
          marginLeft:-blind_position
      }

      return (
          <div className="row">
             <div className="item-selected-list">
                 {selectedMaps && selectedMaps.map((item, index) =>
                     <MapSelectedItemRenderer
                         key={`map_item_selected_${index}`}
                         item={item}
                         style={selectedMaps.size == index+1 ? overlay_style: {}}
                         img_style={selectedMaps.size == index+1 ? img_style: {}}
                     /> )}
             </div>

              <div style={{float:'right'}} className="col-lg-2">
                  <MapListSelectedPreview />
              </div>



          </div>
      )
  }
}

const mapStateToProps = (state) => ({
    selectedMaps : state.mapStore.get('selectedMaps'),
    blind_position : state.mapStore.get('blind_position'),
});

const mapDispatchToProps = (dispatch) => ({
    removeSelectedMap: options => dispatch({type: removeSelectedMap.SUCCESS, payload:options}),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapListSelectedContainer);