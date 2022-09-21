import {type} from "os";

const initState: StateType = {
    isLoading: false
}
export type loadingACType = {
    type: "IS-LOADING",
    isLoading: boolean
}
export type StateType = {
    isLoading: boolean
}
export const loadingReducer = (state = initState, action: loadingACType): StateType => { // fix any
    switch (action.type) {
        case "IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingACType => ({
    type: "IS-LOADING",
    isLoading
}) // fix any