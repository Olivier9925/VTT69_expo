import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import {
	WSgetToken,
} from '@services/UsersServices';
import UserReducer from '@reducers/UserReducer';

// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* loginSaga() {
	try {
        const response_token = yield call(WSgetToken);
        global.console.log('🔻', response_token, '🔺')
		} catch (error) {
			console.log('erreur de connexion : ', error)
		}
}


// //////////////////
// WATCH FUNCTIONS
// //////////////////
function* watchlogin() {
	// yield takeEvery(UserReducer.actions.loginSaisie, loginSaga)
}

export default createSagaRoot(watchlogin);