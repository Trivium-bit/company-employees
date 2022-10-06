import { usersAPI, UserType } from "../api/api";
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
export const setUsersTC = () =>(dispatch:AppThunkDispatch) => {
    usersAPI.getUsers()
        .then((res) =>{
            dispatch(setUsersAC(res.data.items));
        })
}

/* export const fetchUsersTC = () => {
    return (dispatch: AppStoreType) => {
        usersAPI.getUsers()
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
                return res.data.items
            })
    }
} */