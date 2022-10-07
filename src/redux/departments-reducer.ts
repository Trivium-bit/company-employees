interface CounterState {
    department: DepartmentType
  }

const initialState: CounterState = {
    department: "all",
};

export const departmentsReducer = (state = initialState, action: DepartmentsActionsType): typeof initialState => {
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

export type DepartmentsActionsType = changeDepartmentActionType
export type DepartmentType = 'all' | 'design' | 'analytics' | 'management' | 'ios' |  'android'

//types actionCreaters
export type changeDepartmentActionType = ReturnType<typeof changeDepartmentAC>;
//actionCreater
export const changeDepartmentAC = (department: DepartmentType) => ({ type: 'CHANGE-DEPARTMENT', department } as const);