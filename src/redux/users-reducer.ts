import { usersAPI, UserType } from "../api/api";
import { setAppErrorAC, setAppStatusAC } from "./app-reducer";
import { DepartmentType } from "./departments-reducer";
import { AppThunkDispatch } from "./store";

const initialState: Array<UserType> = []

export const usersReducer = (state = initialState, action: UsersActionsType): typeof initialState => {
    switch (action.type) {
        case 'SET-USERS': {
            return action.users.map(u => ({ ...u}))
        }
        default: return state;
    }
};

export type UsersActionsType = setUsersActionType;

export type setUsersActionType = ReturnType<typeof setUsersAC>;

//actionCreater
export const setUsersAC = (users: Array<UserType>) => ({ type: 'SET-USERS', users } as const);

// thunks
export const setUsersTC = (__example: DepartmentType, __dynamic: boolean) =>(dispatch:AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    usersAPI.getUsers(__example, __dynamic)
        .then((res) =>{
            dispatch(setUsersAC(res.data.items));
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error) => {
           console.log(error.message)
           dispatch(setAppErrorAC(error.message))
           dispatch(setAppStatusAC('failed'))
        }) 
}
