import React from 'react'
import { Link } from 'react-router-dom'

export default function UserPreview({ user }) {

    return (
        <div className="user-preview">

            <div className="img-holder flex auto-center">
                <img src={user.picture.large} alt="" />
            </div>

            <div className="user-info">
                <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                <h2>{user.email}</h2>
            </div>

            <div className="btn-holder flex auto-center">
                <Link to={`/user/${user._id}`}><button >Details</button></Link>
            </div>


        </div>
    )
}
