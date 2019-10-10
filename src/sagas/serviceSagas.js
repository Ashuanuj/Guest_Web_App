
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import Image1 from '../components/assets/img/icons/category/Image1.png';
import Image2 from '../components/assets/img/icons/category/Image2.png';
import Image3 from '../components/assets/img/icons/category/Image3.png';
import Image4 from '../components/assets/img/icons/category/Image4.png';
import Image5 from '../components/assets/img/icons/category/Image5.png';


export function* CategoryData() {
    yield put(actions.CategoryData.request());
    try {
        let objArray = [
            {   id: 1, 
                categoryTitle: "Breakfast", 
                categorySubTitle: "First meal of the day", 
                icon: Image1 , 
                link: `mainsubcategorypage` 
            },
            {   id: 2, 
                categoryTitle: "Brunch", 
                categorySubTitle: "For late mornings", 
                icon:  Image2,  
                link:  `services`
            },
            {   id: 3, 
                categoryTitle: "Lunch",
                categorySubTitle: "Light midday meals", 
                icon: Image3,  
                link: `services` 
            },
            {   id: 4, 
                categoryTitle: " Dinner", 
                categorySubTitle: "Delicious evening meals", 
                icon: Image4 , 
                link: `services`
            },
            {   id: 5, 
                categoryTitle: " Drinks", 
                categorySubTitle: "Party starts from here", 
                icon: Image5 , 
                link: `services` 
            }
        ]
        // const response = [{ id: 1, serviceName: FrontOffice },]
        yield put(actions.CategoryData.success(objArray));
    } catch ({ error }) {
        yield put(actions.CategoryData.read.failure(error));
    }
}

export function* watchCategoryData() {
    yield takeEvery(actions.LOAD_CATEGORY, CategoryData);
}

export default watchCategoryData