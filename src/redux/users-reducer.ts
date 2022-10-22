import { usersAPI, UserType } from "../api/api";
import { setAppErrorAC, setAppStatusAC } from "./app-reducer";
import { DepartmentType } from "./departments-reducer";
import { AppThunkDispatch } from "./store";

type InitialStateType = {
    users: Array<UserType>
    user: UserType
    arrSort: Array<string>
}

const initialState: InitialStateType = {
    users: [],
    user: {
        id: '',
        avatarUrl: '',
        firstName: '',
        lastName: '',
        userTag: '',
        department: '',
        position: '',
        birthday: '',
        phone: ''
    },
    arrSort: ["По алфавиту", "По дню рождения"]
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USERS': {
            return {
                ...state,
                users: action.users.map(u => ({ ...u }))
            }
        }
        case "FILTER-USERS":
            return {
                ...state,
                users: [...state.users].filter((item) =>
                    item.firstName.toLowerCase().includes(action.firstName.toLowerCase())
                )
            };
        case "SORT-NAME":
            return {
                ...state,
                users: [...state.users].sort((a, b) => {
                    return a.firstName > b.firstName ? 1 : -1
                })
            };
        case "SORT-BIRTHDAY":
            return {
                ...state,
                users: [...state.users].sort((a, b) => {
                    return a.birthday < b.birthday ? 1 : -1
                })
            };
        default: return state;
    }
}

export type UsersActionsType = SetUsersActionType | FilterUsersActionType | SortNameActionType | SortBirthdayActionType

export type SetUsersActionType = ReturnType<typeof setUsersAC>;
export type FilterUsersActionType = ReturnType<typeof filterUsersAC>;
export type SortNameActionType = ReturnType<typeof sortNameAC>;
export type SortBirthdayActionType = ReturnType<typeof sortBirthdayAC>;

//actionCreater
export const setUsersAC = (users: Array<UserType>) => ({ type: 'SET-USERS', users } as const);
export const filterUsersAC = (firstName: string) => ({ type: "FILTER-USERS", firstName } as const)
export const sortNameAC = () => ({ type: "SORT-NAME" } as const)
export const sortBirthdayAC = () => ({ type: "SORT-BIRTHDAY" } as const)

// thunks
export const setUsersTC = (__example: DepartmentType, __dynamic: boolean) => (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
    usersAPI.getUsers(__example, __dynamic)
        .then((res) => {
            dispatch(setUsersAC(res.data.items));
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((error) => {
            console.log(error.message)
            dispatch(setAppErrorAC(error.message))
            dispatch(setAppStatusAC('failed'))
        })
}
