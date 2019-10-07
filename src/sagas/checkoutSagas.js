
import { put, call,take } from 'redux-saga/effects';
import * as actions from '../actions';

export function* Checkout() {
console.log("submit--checkout----form");
yield put(actions.checkoutPageData.request());
try {
    console("checkout page saga clicked")
    yield put(actions.checkoutPageData.success());
}
catch ({ error }) {
    console.log(error)
    yield put(actions.checkoutPageData.failure(error));
}
}

export function* watchcheckoutPage() {
    while (true) {
    const { payload } = yield take(actions.CHECKOUT_PAGE);
    console.log(payload, 'checkout page click')
    yield call(Checkout, payload);
    }
}

export default watchcheckoutPage