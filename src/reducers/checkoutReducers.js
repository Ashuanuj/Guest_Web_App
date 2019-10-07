import { CHECKOUT_PAGE } from '../actions';

const initialState = {
    error: undefined,
    checkout:false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_PAGE.SUCCESS:
            {
                console.log(action.payload, 'checkout page data')
                return {
                    ...state,
                    //   ...action.payload,
                    checkout: true,
                };
            }
        case CHECKOUT_PAGE.FAILURE:
            {
                return {
                    ...state,
                    error: action.payload,
                };
            }
        default:
            return state;
    }
}