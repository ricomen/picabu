import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/articlesActions';
import * as api from '../api/api';

export function* fetchArticles() {
    try {
        const data = yield call(api.getArticles);
        console.log(data)
        yield put(actions.getArticlesSuccess(data))
    } catch(errors) {
        yield put(actions.getArticlesError(errors))
    }
}
export default function* watchFetchData() {
    yield takeLatest(actions.ARTICLES.REQUEST, fetchArticles);
}