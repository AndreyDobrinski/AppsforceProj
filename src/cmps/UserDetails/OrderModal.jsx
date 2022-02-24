import { useState } from "react"
import { useDispatch } from "react-redux"

import { inputService } from "../../services/handleEditInput"
import { editUser } from "../../store/actions/userActions"
import UserInput from "./UserInput"

export default function OrderModal({ modalClicked, onCloseModal, user, setUser, history }) {

    const dispatch = useDispatch()
    const [isValidForm, setIsValidForm] = useState(true)

    const onHandleInput = async (ev, inputType, setUser) => {
        inputService.handleInput(ev, inputType, setUser)
    }

    const onDoChangeUser = async (ev) => {
        ev.preventDefault()

        if (!user.isValidTitleName || !user.isValidFirstName || !user.isValidLastName || !user.isValidEmail ||
            !user.isValidLocationCountry || !user.isValidLocationCity || !user.isValidStreetName ||
            !user.isValidStreetNumber) {
            setIsValidForm(false)

        } else {
            setIsValidForm(true)
            try {
                dispatch(editUser(user))
                history.push('/')
            } catch (err) {
                console.log('User Edit : failed to edit user', err);
            }
        }
    }

    return (
        <div className="order-modal">

            {modalClicked && <div className="modal" onClick={() => onCloseModal()}>

                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>

                    <span className="close" onClick={() => onCloseModal()}>&times;</span>

                    <form action="" onSubmit={onDoChangeUser}>

                        <div className="box flex column">

                            <UserInput title='Title' value={user.name.title} onHandleInput={(ev) => onHandleInput(ev, 'Name', setUser)} type='text' name='title' />
                            <UserInput title='First Name' value={user.name.first} onHandleInput={(ev) => onHandleInput(ev, 'Name', setUser)} type='text' name='first' />
                            <UserInput title='Last Name' value={user.name.last} onHandleInput={(ev) => onHandleInput(ev, 'Name', setUser)} type='text' name='last' />
                            <UserInput title='Email' value={user.email} onHandleInput={(ev) => onHandleInput(ev, 'Email', setUser)} type='text' name='email' />
                            <UserInput title='Country' value={user.location.country} onHandleInput={(ev) => onHandleInput(ev, 'Location', setUser)} type='text' name='country' />
                            <UserInput title='City' value={user.location.city} onHandleInput={(ev) => onHandleInput(ev, 'Location', setUser)} type='text' name='city' />
                            <UserInput title='Street Name' value={user.location.street.name} onHandleInput={(ev) => onHandleInput(ev, 'Street', setUser)} type='text' name='name' />
                            <UserInput title='Street Number' value={user.location.street.number} onHandleInput={(ev) => onHandleInput(ev, 'Street', setUser)} type='number' name='number' />

                            {isValidForm ? <></> : <div>
                                {user.isValidTitleName ? <></> : <div className="error-msg">Title is required and must be a minimum length of 3 </div>}
                                {user.isValidFirstName ? <></> : <div className="error-msg">First name is required and must be a minimum length of 3 </div>}
                                {user.isValidLastName ? <></> : <div className="error-msg">Last name is required and must be a minimum length of 3 </div>}
                                {user.isValidEmail ? <></> : <div className="error-msg">Email must be valid and required</div>}
                                {user.isValidLocationCountry ? <></> : <div className="error-msg">Country Name is required</div>}
                                {user.isValidLocationCity ? <></> : <div className="error-msg">City name is required</div>}
                                {user.isValidStreetName ? <></> : <div className="error-msg">Street name is required</div>}
                                {user.isValidStreetNumber ? <></> : <div className="error-msg">Street number is required</div>}
                            </div>}

                        </div>

                        <div className="btn-holder flex auto-center m-10">
                            <button>Save</button>
                        </div>

                    </form>

                </div>

            </div>}

        </div>
    )
}