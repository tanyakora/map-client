import { createRoutine } from "redux-saga-routines";

export const addSelectedMap = createRoutine('MAP/ADD_SELECTED');
export const removeSelectedMap = createRoutine('MAP/REMOVE_SELECTED');
export const onChangeOpacityMap = createRoutine('MAP/CHANGE_OPACITY');
export const onChangeWidthMap = createRoutine('MAP/CHANGE_WIDTH');
