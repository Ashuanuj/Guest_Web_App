import { createAction,createRequestTypes, createActionsFromTypes, createCrudTypes,createCrudActions } from './actionHelper';

//Request Form Login page
export const LOG_IN = createRequestTypes('LOG_IN');
export const login = createActionsFromTypes(LOG_IN);

export const GUEST_LOG_IN = 'GUEST_LOG_IN';
export const guestLogIn = createAction(GUEST_LOG_IN);

//Initialize
export const INITIALIZE = 'INITIALIZE';
export const initialize = createAction(INITIALIZE);

export const HARD_STATE_RESET = 'HARD_STATE_RESET';
export const hardStateReset = createAction(HARD_STATE_RESET);

//Dashboard page
export const LOAD_SERVICE = 'LOAD_SERVICE';
export const loadService = createAction(LOAD_SERVICE);

export const SERVICE_DATA = createRequestTypes('SERVICE_DATA');
export const ServiceData = createActionsFromTypes(SERVICE_DATA);

export const LOAD_SERVICE_LOADING = 'LOAD_SERVICE_LOADING';
export const ServiceLoding = createAction(LOAD_SERVICE_LOADING);

//Service Category page
export const LOAD_CATEGORY= 'LOAD_CATEGORY';
export const loadCategory = createAction(LOAD_CATEGORY);

export const LOAD_CATEGORY_DATA = createRequestTypes('LOAD_CATEGORY_DATA');
export const CategoryData = createActionsFromTypes(LOAD_CATEGORY_DATA);

//SERVICE CATEGORY AND SUB CATEGORY PAGES
export const LOAD_SUBCATEGORY_LOADING = 'LOAD_SUBCATEGORY_LOADING';
export const SubcateryLoding = createAction(LOAD_SUBCATEGORY_LOADING);

export const SUB_CATEGORY= 'SUB_CATEGORY';
export const subCategory = createAction(SUB_CATEGORY);

export const SUB_CATEGORY_DATA = createRequestTypes('SUB_CATEGORY_DATA');
export const subCategoryData = createActionsFromTypes(SUB_CATEGORY_DATA);

//subcategory2
export const SUB_CATEGORY_QTY= 'SUB_CATEGORY_QTY';
export const subCategoryQty = createAction(SUB_CATEGORY_QTY);

export const SUB_CATEGORY_QTY_DATA = createRequestTypes('SUB_CATEGORY_QTY_DATA');
export const subCategoryQtyData = createActionsFromTypes(SUB_CATEGORY_QTY_DATA);

// Front Office
export const LOAD_FRONT_OFFICE= 'LOAD_FRONT_OFFICE';
export const loadFrontOffice = createAction(LOAD_FRONT_OFFICE);

export const LOAD_FRONTOFFICE_DATA = createRequestTypes('LOAD_FRONTOFFICE_DATA');
export const loadFrontOfficeData = createActionsFromTypes(LOAD_FRONTOFFICE_DATA);


//Checkout page
export const CHECKOUT_PAGE= 'CHECKOUT_PAGE';
export const checkoutPage = createAction(CHECKOUT_PAGE);

export const CHECKOUT = createCrudTypes('CHECKOUT');
export const checkout = createCrudActions(CHECKOUT);

export const CREATE_REQUEST= 'CREATE_REQUEST';
export const createRequest = createAction(CREATE_REQUEST);

export const CHECKOUT_PAGE_DATA = createRequestTypes('CHECKOUT_PAGE_DATA');
export const checkoutPageData = createActionsFromTypes(CHECKOUT_PAGE_DATA);

export const TOAST = {
    PUSH: 'TOAST_PUSH',
    DISPLAY: 'TOAST_DISPLAY',
    CLOSE: 'TOAST_CLOSE',
};
export const toast = createActionsFromTypes(TOAST);

export const CONTINUE = 'CONTINUE';
export const continueButton = createAction(CONTINUE);