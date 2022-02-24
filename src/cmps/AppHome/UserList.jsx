import React from 'react'
import UserPreview from './UserPreview'

export default function UserList({ users }) {
    return (
        <div className='user-list flex'>
            
            {users.map(user =>
                <div key={user._id} >
                    <UserPreview user={user} />
                </div>
            )}

        </div>
    )
}
