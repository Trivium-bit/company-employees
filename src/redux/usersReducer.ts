import { usersAPI, UserType } from "../api/api";

const initialState: Array<UserType> = []

export const departmentsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case 'SET-USERS': {
            return action.users.map(u => ({ ...u}))
        }
        default: return state;
    }
};

type ActionsType = setUsersActionType;

export type setUsersActionType = ReturnType<typeof setUsersAC>;

//actionCreater
export const setUsersAC = (users: Array<UserType>) => ({ type: 'SET-USERS', users } as const);