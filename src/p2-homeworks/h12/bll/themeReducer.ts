const initState: InitialStateType = {
    theme: 'default'
};
export type InitialStateType = {
    theme: ThemesType
}
export type ThemesType = 'dark' | 'red' | 'default'
type ChangeThemeCType = {
    type: "CHANGE-THEME"
    theme: ThemesType
}
export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeCType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state, theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType): ChangeThemeCType => ({
    type: "CHANGE-THEME",
    theme
}); // fix any