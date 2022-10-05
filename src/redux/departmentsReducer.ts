import { usersAPI, UserType } from "../api/api";

const initialState = {
    department: "Все",
};

export const departmentsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case 'CHANGE-DEPARTMENT': {
            return {
                ...state,
                department: action.department
            }
        }
        default: return state;
    }
};

type ActionsType = changeDepartmentActionType
 
export type DepartmentType = 'Все' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' |  'Android'

export type changeDepartmentActionType = ReturnType<typeof changeDepartmentAC>;

//actionCreater
export const changeDepartmentAC = (department: DepartmentType) => ({ type: 'CHANGE-DEPARTMENT', department } as const);