import { userService } from "../../services/userService"


export function loadUsers(newFilterBy, filterName) {
    return async dispatch => {
        try {
            const users = await userService.query(newFilterBy, filterName)
            dispatch({ type: 'SET_USERS', users, newFilterBy })
        } catch (err) {
            console.log('UserActions: Could not load users', err)
        }
    }
}


export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: Could not remove user', err);
        }
    }
}


export function editUser(user) {
    return async dispatch => {
        try {
            await userService.save(user)
            dispatch({ type: 'SAVE_USER', user })
        } catch (err) {
            console.log('UserActions: Could not save user', err);
        }
    }
}