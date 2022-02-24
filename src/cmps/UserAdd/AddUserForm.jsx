import React from 'react'

export default function AddUserForm({ onHandleInput, onAddUser }) {

    const inputsType = [
        {
            label: 'Title',
            name: 'title'
        },
        {
            label: 'First Name',
            name: 'first'
        },
        {
            label: 'Last Name',
            name: 'last'
        },
        {
            label: 'Email',
            name: 'email'
        },
        {
            label: 'City Name',
            name: 'city'
        },
        {
            label: 'Country Name',
            name: 'country'
        },
        {
            label: 'Street Name',
            name: 'streetName'
        },
        {
            label: 'Street Number',
            name: 'streetNumber'
        },
    ]

    return (
        <form action="" onSubmit={onAddUser}>

            <div className="flex column">

                {inputsType.map((input, idx) =>
                    <div className="m-10" key={idx}>
                        <label htmlFor="">{input.label} : </label>
                        <input type="text" placeholder={input.label} onChange={onHandleInput} name={input.name} />
                    </div>
                )}

            </div>

            <div className="btn-holder">
                <button>Submit</button>
            </div>

        </form>
    )
}
