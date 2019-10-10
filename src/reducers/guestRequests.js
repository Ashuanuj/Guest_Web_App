import { GUEST_REQUESTS } from '../actions';

const initialState = {
    requests: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GUEST_REQUESTS.SUCCESS: {
            return {
                ...state,
                requests: action.payload
            };
        }
        default:
            return state;
    }
}