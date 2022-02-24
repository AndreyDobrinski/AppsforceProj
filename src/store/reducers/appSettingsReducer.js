const initialState = {
    isMenuOpen: false,
}

export function appSettingsReducer(state = initialState, action) {
    switch (action.type) {
        case 'IS_MENU_OPEN':
            return { ...state, isMenuOpen: !state.isMenuOpen}
        default:
            return state
    }
}

