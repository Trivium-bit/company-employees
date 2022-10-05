import {combineReducers, createStore} from 'redux';
import { departmentsReducer } from './departmentsReducer';

 const reducers = combineReducers({
    departments: departmentsReducer,
 })

 export const store = createStore(reducers)

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

 // @ts-ignore
 window.store = store // for dev
