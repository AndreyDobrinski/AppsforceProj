import { useState } from "react"
import { useDispatch } from "react-redux"

import AddUserForm from "../cmps/UserAdd/AddUserForm"
import { editUser } from "../store/actions/userActions"

export const UserAdd = ({ history }) => {

    const dispatch = useDispatch()

    const [user, setUser] = useState(null)

    const handleInput = (ev) => {
        const { name, value } = ev.target
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const addUser = async (ev) => {
        ev.preventDefault()
        try {
            dispatch(editUser(user))
            history.push('/')
        } catch (err) {
            console.log('User Add : Could not add new user');
        }
    }

    return (
        <div className="user-add">
            <div className="content pt-100 container">
                <AddUserForm onHandleInput={handleInput} onAddUser={addUser} />
            </div>
        </div>
    )
}