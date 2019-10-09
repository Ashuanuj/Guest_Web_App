
import { put, call, take } from 'redux-saga/effects';
import { api } from '../services';
import { setAuthData } from '../utility/auth'
import * as actions from '../actions';
// import axios from 'axios';
import history from '../helper/history';

export function* LogIn(data) {
    console.log("submit------form");
    yield put(actions.LogIn.request(data));
    try {
        // const response = yield call('http://localhost:3000/', data);
        // console.log("response---------->",response);
        // const response = axios
        let authData = {
            email: data.name,
            password: data.roomno,
            dob: data.dob
        }
        const response = yield call(api.login, authData);
        console.log("response---------->",response);
        if (response) {
            // yield put(actions.LogIn.success(response));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )
            yield call(setAuthData, response);
            yield call(history.push, '/dashboard');
        }
        else {
            var data1 = { customMessage: 'Access Denied.' }
            yield put(actions.LogIn.failure(data1));
        }
    }
    catch ({ error }) {
        console.log(error)
        yield put(actions.LogIn.failure(error));
    }
}

export function* watchLogIn() {
    while (true) {
        const { payload } = yield take(actions.GUEST_LOG_IN);
        yield call(LogIn, payload);
    }
}

export default watchLogIn