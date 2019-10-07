import { SUB_CATEGORY_QTY,SUB_CATEGORY_QTY_DATA,LOAD_SUBCATEGORY_LOADING} from '../actions';

const initialState = {
    error: undefined,
    sub_Category:[],
    loading:false
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
        case SUB_CATEGORY_QTY_DATA.SUCCESS:
            {
                console.log(action.payload, 'Service sub category quantity page data')
                return {
                    ...state,
                    sub_Category: action.payload,
                };
            }
        case SUB_CATEGORY_QTY.FAILURE:
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