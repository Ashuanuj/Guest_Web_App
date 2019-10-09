import { CHECKOUT_PAGE, CHECKOUT } from '../actions';

const initialState = {
    error: undefined,
    checkout: false,
    requests: []
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
        case CHECKOUT.SUCCESS: {
console.log(action.payload, 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
            return {
                ...state,
                // requests: [
                //     action.payload.issueReport,
                //     ...state.requests,
                // ],
            };
        }
        default:
            return state;
    }
}