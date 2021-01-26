import {combineReducers} from 'redux';
import titleReducers from './titleReducers';
import articlesReducers from './articlesReducers';

export default combineReducers({
    title: titleReducers,
    articles: articlesReducers,
})