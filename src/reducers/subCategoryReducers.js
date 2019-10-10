import { SUB_CATEGORY,SUB_CATEGORY_DATA,LOAD_SUBCATEGORY_LOADING, CONTINUE} from '../actions';

const initialState = {
    error: undefined,
    subCategory:[],
    loading:false,
    cartItems: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SUBCATEGORY_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case SUB_CATEGORY_DATA.SUCCESS:
            {
                return {
                    ...state,
                    subCategory: action.payload,
                };
            }
        case SUB_CATEGORY.FAILURE:
            {
                return {
                    ...state,
                    error: action.payload,
                };
            }
            case CONTINUE: {
                return {
                    ...state,
                    cartItems: action.payload
                }
            }
        default:
            return state;
    }
}