import {combineReducers} from 'redux';
import titleReducers from './titleReducers';

export default combineReducers({
    title: titleReducers
})