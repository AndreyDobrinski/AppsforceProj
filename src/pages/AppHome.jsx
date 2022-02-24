import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { InputSearchName } from "../cmps/AppHome/InputSearchName"
import UserList from "../cmps/AppHome/UserList"
import { loadUsers } from "../store/actions/userActions"

export const AppHome = () => {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.userModule)

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch,])

  return (
    <div className="app-home">
      <div className="content pt-100 container">

        <InputSearchName filterName='name' holder='Search by First name' />
        <InputSearchName filterName='email' holder='Search by Email' />

        <div className="btn-holder mb-10 flex auto-center">
          <Link to={`/user/add`}><button>Add new User</button></Link>
        </div>

        <UserList users={users} />

      </div>
    </div>
  )

}

