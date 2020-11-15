import { all } from 'redux-saga/effects';
import TitleSagas from './titleSagas';

export default function* rootSaga() {
    yield all([TitleSagas()]);
}