import { all, fork } from 'redux-saga/effects';

import guestForm from './guestForm';
import dashboardSagas from './dashboardSagas';
import serviceSagas from './serviceSagas';
import frontOffice  from './frontOfficeSagas';
import subCategory from './subCategory';
import subCategoryQty from './subCategoryQtySagas';
import checkoutSagas from './checkoutSagas';
 
export default function* rootSaga()
{
    yield all([ 
        fork(guestForm),
        fork(dashboardSagas),
        fork(serviceSagas),
        fork(frontOffice),
        fork(subCategory),
        fork(subCategoryQty),
        fork(checkoutSagas),
    ]);
}
  