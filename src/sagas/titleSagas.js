import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/titleActions';
import * as api from '../api/api';

export function* fetchTitle() {
    try {
        const data = yield call(api.getTitle);
        yield put(actions.getTitleSuccess(data))
    } catch(errors) {
        yield put(actions.getTitleError(errors))
    }
}
export default function* watchFetchData() {
    yield takeLatest(actions.TITLE.REQUEST, fetchTitle);
}