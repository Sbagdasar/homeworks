import {UserType} from "../HW8";

type SortUpAT = {
    type: 'sort',
    payload: 'up'
}
type SortDownAT = {
    type: 'sort',
    payload: 'down'
}
type CheckAT = {
    type: 'check'
    payload: number
}
type ActionType = SortUpAT | SortDownAT | CheckAT
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            return action.payload === 'up' ?
                [...state].sort((a, b) => a.name.localeCompare(b.name)) :
                [...state].sort((a, b) => b.name.localeCompare(a.name))
        }
        case 'check': {

            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}