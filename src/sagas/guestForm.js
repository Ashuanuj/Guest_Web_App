
import { put, call, take } from 'redux-saga/effects';
import { api } from '../services';
import * as actions from '../actions';
import axios from 'axios';
import history from '../helper/history';

export function* LogIn(data) {
    console.log("submit------form");
    yield put(actions.LogIn.request(data));
    try {
        // const response = yield call('http://localhost:3000/', data);
        // console.log("response---------->",response);
        // const response = axios
        const response = yield call(api.login, { email: "admin", password: "active.123" })
        console.log(response,'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        if (data.name === 'test' && data.roomno === '101' && data.dob === '2019-10-04') {
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
        console.log(payload, 'ooooooooooooopppppppppppppppppppppppppppp')
        yield call(LogIn, payload);
    }
}

export default watchLogIn