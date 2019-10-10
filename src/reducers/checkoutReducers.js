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