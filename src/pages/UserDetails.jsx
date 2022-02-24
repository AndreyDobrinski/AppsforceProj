import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import OrderModal from "../cmps/UserDetails/OrderModal";
import { userService } from "../services/userService";
import { removeUser } from "../store/actions/userActions";

export const UserDetails = ({ match, history }) => {

    const [user, setUser] = useState(null)
    const [modalClicked, setModalClicked] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const loadUser = async () => {
            const { userId } = match.params
            const user = await userService.getById(userId)
            setUser(user)
        }
        loadUser()
    }, [match.params])

    const onRemoveUser = (user) => {
        dispatch(removeUser(user._id))
        history.push('/')
    }

    const onOpenModal = () => {
        setModalClicked(true)
    }

    const onCloseModal = () => {
        setModalClicked(false)
    }


    if (!user) return <div>Loading...</div>
    return (
        <div className="user-details">
            <div className="content pt-100 container">

                <div className="img-holder flex auto-center">
                    <img src={user.picture.large} alt="" />
                </div>

                <div className="user-info">
                    <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                    <h2>{user.email}</h2>
                </div>

                <div className="user-location flex column">
                    <p>Country: {user.location.country}</p>
                    <p>City: {user.location.city}</p>
                    <p>Street: {user.location.street.name} {user.location.street.number}</p>
                </div>

                <div className="btns-holder flex auto-center">

                    <div className="btn-holder m-10">
                        <button onClick={() => { onRemoveUser(user) }}>Delete</button>
                    </div>

                    <div className="btn-holder m-10">
                        <button onClick={() => onOpenModal()}>Edit</button>
                    </div>

                </div>

            </div>

            <OrderModal modalClicked={modalClicked} onCloseModal={onCloseModal} user={user} setUser={setUser} history={history}/>

        </div>
    )
}