const initState = {
    department: "Все"
};

export const departmentsReducer = (state = initState, action: ActionsType): typeof initState => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                department: action.department
            }
        }
        default: return state;
    }
};

type ActionsType = isChangeDepartmentType
 
export type DepartmentType = 'Все' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' |  'Android'

type isChangeDepartmentType = {
    type: 'CHANGE-THEME'
    department: DepartmentType
}
export const changeDepartmentAC = (department: DepartmentType): isChangeDepartmentType => ({ type: 'CHANGE-THEME', department } as const);