// Modules
import { all, fork } from 'redux-saga/effects';
// Sagas

export function createSagaRoot(...sagas) {
    return function* rootSaga() {
        yield all(sagas.map(saga => fork(saga)));
    };
}

export default createSagaRoot();