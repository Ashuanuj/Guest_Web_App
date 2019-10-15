import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { HARD_STATE_RESET } from '../actions';

import gformReducers from './guestUserForm';
import dashboardServicesReducers from './dashboardReducers';
import serviceCategoryReducers from './serviceCategoryReducers';
import frontOffice from './frontOfficeReducers';
import subCategory from './subCategoryReducers';
import subCategoryQty from './subCategoryQtyReducers';
import checkoutReducers from './checkoutReducers';
import guestRequests from './guestRequests'
import header from './header'

const appReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  gformReducers,
  dashboardServicesReducers,
  serviceCategoryReducers,
  frontOffice,
  subCategory,
  subCategoryQty,
  checkoutReducers,
  guestRequests,
  header
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
    if (action.type === HARD_STATE_RESET)
    {
        state = initialState;
    }
    return appReducer(state, action);
};

export default rootReducer;

// export default rootReducer;