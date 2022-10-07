export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

export const initialState = {
    status: 'loading' as RequestStatusType,
    error: null,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        default:
            return state
    }
}

export type RequestStatusType = 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;

export type AppActionsType = SetAppStatusActionType | SetAppErrorActionType

export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
export const setAppErrorAC = (error: ErrorType) => ({ type: 'APP/SET-ERROR', error } as const)