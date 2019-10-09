import { put, call, take } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../services';

export function* createRequest(data) {
    console.log(data, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
    yield put(actions.checkout.create.request());
    console.log(data, 'ooooooooooooooooooooooooooooooooiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    try {
        console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        
        let _data = {
            cartItems: data,
            room_no: localStorage.getItem('roomNo'),
            areaId: localStorage.getItem('areaId')
        }
        const response = yield call(api.requestCreate, _data);
        console.log(response, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydddddddddddddddddddddddddddddd')
        yield put(actions.checkout.create.success(response));
    }
    catch ({ error }) {
        console.log(error)
        yield put(actions.checkout.create.failure(error));
    }
}

export function* watchcreateRequest() {
    while (true) {
        const { payload } = yield take(actions.CREATE_REQUEST);
        console.log(payload, 'checkout page click')
        yield call(createRequest, payload);
    }
}

export default watchcreateRequest