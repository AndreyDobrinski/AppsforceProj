
export function toggleMenu() {
    return dispatch => {
        dispatch({ type: 'IS_MENU_OPEN' })

    }
}