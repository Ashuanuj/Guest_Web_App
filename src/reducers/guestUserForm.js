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
                return {
                    ...state,
                    //   ...action.payload,
                    IS_LOGIN: true,
                    guestDetails: action.payload,
                };
            }
        case LOG_IN.FAILURE:
            {
                console.log(action.payload, 'oooooooooooooooooooooooooooooooooooooooooooooo')
                return {
                    ...state,
                    error: action.payload.customMessage,
                };
            }
        default:
            return state;
    }
}