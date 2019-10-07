import { LOG_IN } from '../actions';

const initialState = {
    error: undefined,
    IS_LOGIN: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN.SUCCESS:
            {
                return {
                    ...state,
                    //   ...action.payload,
                    IS_LOGIN: true,
                };
            }
        case LOG_IN.FAILURE:
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