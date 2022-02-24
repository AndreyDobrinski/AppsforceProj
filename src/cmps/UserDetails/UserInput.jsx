import React from 'react'

export default function UserInput({ title, value, onHandleInput, type , name }) {
    return (
        <div className='user-input'>
            <label htmlFor="">{title}: </label>
            <input type={type} placeholder={title} value={value} name={name} onChange={onHandleInput} />
        </div>
    )
}
