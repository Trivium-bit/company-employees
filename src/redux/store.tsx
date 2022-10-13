import { applyMiddleware, combineReducers, createStore } from 'redux';
import { DepartmentsActionsType, departmentsReducer } from './departments-reducer';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { UsersActionsType, usersReducer } from './users-reducer';
import { AppActionsType, appReducer } from './app-reducer';

const rootReducer = combineReducers({
   departments: departmentsReducer,
   users: usersReducer,
   app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootActionsType = UsersActionsType | DepartmentsActionsType | AppActionsType

export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store

// @ts-ignore
window.store = store // for dev
