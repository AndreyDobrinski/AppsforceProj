const initialState = {
    users: [],
    filterBy: ''
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users , filterBy: action.newFilterBy }
        case 'REMOVE_USER':
            return { ...state, users: state.users.filter(user => user._id !== action.userId) }
        case 'SAVE_USER':
            return { ...state, users: state.users.map(user => (user._id === action.user._id) ? action.user : user) }
        default:
            return state
    }
}

