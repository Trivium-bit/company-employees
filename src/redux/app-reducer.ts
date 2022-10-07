export type InitialStateType = {
    status: RequestStatusType
}

export const initialState = {
    status: 'loading' as RequestStatusType,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        default:
            return state
    }
}

export type RequestStatusType = 'loading' | 'succeeded' | 'failed'


export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;


export type AppActionsType = SetAppStatusActionType

export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
