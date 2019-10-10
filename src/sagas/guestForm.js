
import { put, call, take } from 'redux-saga/effects';
import { api } from '../services';
import { setAuthData } from '../utility/auth'
import * as actions from '../actions';
// import axios from 'axios';
import history from '../helper/history';

export function* LogIn(data) {
    yield put(actions.login.request());
    try {
        let authData = {
            email: data.name,
            password: data.roomno,
            dob: data.dob
        }
        const response = yield call(api.login, authData);
        if (response) {
            // yield put(actions.login.success(response));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )
            yield call(setAuthData, response);
            yield call(history.push, '/dashboard');
        }
        else {
            var data1 = { customMessage: 'Access Denied.' }
            yield put(actions.login.failure(data1));
        }
    }
    catch ({ error }) {
        yield put(actions.login.failure(error));
    }
}

export function* watchLogIn() {
    while (true) {
        const { payload } = yield take(actions.GUEST_LOG_IN);
        yield call(LogIn, payload);
    }
}

export default watchLogIn