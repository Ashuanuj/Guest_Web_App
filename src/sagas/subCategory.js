
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';

import SubImage1 from '../components/assets/img/icons/subcategory/SubImage1.png';
import SubImage2 from '../components/assets/img/icons/subcategory/SubImage2.png';
import SubImage3 from '../components/assets/img/icons/subcategory/SubImage3.png';

import vegImg from '../components/assets/img/icons/veg.png'
import NonvegImg from '../components/assets/img/icons/non-veg.png'

export function* SubCategoryData() {
    yield put(actions.subCategoryData.request());
    try {
        let objArray = [
            {   id: 1, 
                Title: "Idly Vada", 
                SubTitle: "2 Idly + 1 Vada ", 
                icon: vegImg , 
                image: SubImage1,
                rate: "4.00",
                link: `mainsubcategorypage` 
            },
            {   id: 2, 
                Title: "Bread Toast", 
                SubTitle: "2 Bread slices with butter  ", 
                icon: vegImg , 
                image: SubImage2,
                rate: "4.00",
                link: `mainsubcategorypage` 
            },
            {   id: 3, 
                Title: "Omelette ", 
                SubTitle: "2 Bread slices with butter  ", 
                icon: NonvegImg , 
                image: SubImage3,
                rate: "3.00",
                link: `mainsubcategorypage` 
            },
            {   id: 4, 
                Title: "Idly Vada", 
                SubTitle: "2 Idly + 1 Vada ", 
                icon: vegImg , 
                image: SubImage1,
                rate: "4.00",
                link: `mainsubcategorypage` 
            },
            {   id: 5, 
                Title: "Omelette ", 
                SubTitle: "2 Bread slices with butter  ", 
                icon: NonvegImg , 
                image: SubImage3,
                rate: "3.00",
                link: `mainsubcategorypage` 
            },
          
        ]
        yield put(actions.subCategoryData.success(objArray));
    } catch ({ error }) {
        yield put(actions.subCategoryData.read.failure(error));
    }
}

export function* watchsubCategoryData() {
    // fuction name and action
    yield takeEvery(actions.SUB_CATEGORY, SubCategoryData);
}

export default watchsubCategoryData