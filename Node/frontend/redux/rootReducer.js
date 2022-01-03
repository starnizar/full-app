import { combineReducers } from 'redux';
import {modalsReducer} from './modalsReducer';


export const rootReducer = combineReducers({
  modals: modalsReducer,
});