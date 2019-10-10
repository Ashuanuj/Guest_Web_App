import { put, call, take } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../services';

export function* createRequest(data) {
    yield put(actions.checkout.create.request());
    try {
        
        let _data = {
            cartItems: data,
            room_no: localStorage.getItem('roomNo'),
            areaId: localStorage.getItem('areaId')
        }
        const response = yield call(api.requestCreate, _data);
        yield put(actions.checkout.create.success(response));
    }
    catch ({ error }) {
        yield put(actions.checkout.create.failure(error));
    }
}

export function* watchcreateRequest() {
    while (true) {
        const { payload } = yield take(actions.CREATE_REQUEST);
        yield call(createRequest, payload);
    }
}

export default watchcreateRequest