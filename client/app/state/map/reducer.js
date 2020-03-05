import { handleActions } from 'redux-actions';

import {fromJS} from 'immutable';

import {
    addSelectedMap,
    removeSelectedMap,
    onChangeOpacityMap,
    onChangeWidthMap
} from './';

const diffOpacity=0.1;

const initialState = fromJS({
    maps: [{id:1, src:'map1.png'}, {id:2, src:'map2.png'} ],
    selectedMaps: [],
    blind_position:0,
});

const map = handleActions({

    [addSelectedMap.SUCCESS]: (state, action) => {
        let map = state.getIn(['maps', action.payload.id-1]);
        map = map.setIn(['num'], state.getIn(['selectedMaps']).size);
        map = map.setIn(['opacity'], 1);
        let currState = state.setIn(['selectedMaps', state.getIn(['selectedMaps']).size], map);

        return currState;
    },

   [removeSelectedMap.SUCCESS]: (state, action) => {
        let currState = state.setIn(['selectedMaps'], state.getIn(['selectedMaps'])
            .filter(item =>{  return item.get('num')!=action.payload.num})
            .map((item, index) =>{
                item = item.set('num', index);
                return item;
            })
        );
        return currState;
    },

   [onChangeOpacityMap.SUCCESS]: (state, action) => {
        let currState = state.setIn(['selectedMaps'], state.getIn(['selectedMaps'])
            .map(item =>{
                if(item.get('num') == action.payload.num){

                    let opacity =  (parseFloat(item.get('opacity'))+ action.payload.koef * diffOpacity).toFixed(2);
                    opacity = opacity <=0 ? 0 : opacity >=1 ?1 :opacity;
                    item = item.set('opacity', opacity);
                }
                return item;
            })
        );
        return currState;
    },

   [onChangeWidthMap.SUCCESS]: (state, action) => {
        let currState = state.setIn(['blind_position'], action.payload.position);
        return currState;
    },

}, initialState);

export default map;
