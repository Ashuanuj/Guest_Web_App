import { LOAD_CATEGORY,LOAD_CATEGORY_DATA, LOAD_SERVICE_LOADING } from '../actions';

const initialState = {
    error: undefined,
    Category:[],
    loading:false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SERVICE_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_CATEGORY_DATA.SUCCESS:
            {
                console.log(action.payload, 'Service page data')
                return {
                    ...state,
                    Category: action.payload,
                };
            }
        case LOAD_CATEGORY.FAILURE:
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