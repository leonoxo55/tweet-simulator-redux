import {combineReducers} from 'redux';
import modalsReducer from './modalsReducer';
import validationsReducer from './validationsReducer';

export default combineReducers({
    modals: modalsReducer,
    validations: validationsReducer
})