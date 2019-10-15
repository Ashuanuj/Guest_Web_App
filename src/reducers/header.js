import { HANDLE_HEADER } from '../actions';
import { setAuthData } from '../utility/auth'

const initialState = {
    header:undefined,
    dashbaord:false
};

export default function reducer(state = initialState, action) {
 switch (action.type) {
        case HANDLE_HEADER: {
            return {
                header:action.payload[0],
                dashbaord:action.payload[1]
            }
        }
        default:
            return state;
    }
}