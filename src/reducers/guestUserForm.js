import { LOG_IN } from '../actions';

const initialState = {
    error: undefined,
    IS_LOGIN: false,
    guestDetails: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
       
        case LOG_IN.SUCCESS:
            {
                console.log(action.payload)
                return {
                    ...state,
                    //   ...action.payload,
                    IS_LOGIN: true,
                    guestDetails: action.payload,
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