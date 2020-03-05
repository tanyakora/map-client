import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as thunkReducer } from 'redux-saga-thunk';

import { mapReducer } from './map';

const rootReducer = combineReducers({
	routing: routerReducer,
	form: formReducer,
	thunk: thunkReducer,

    mapStore: mapReducer,
});

export default rootReducer;