import { combineReducers } from '@reduxjs/toolkit';
import infoSlice from './infoSlice';

const rootReducer = combineReducers({
    info: infoSlice,
});

export default rootReducer;
