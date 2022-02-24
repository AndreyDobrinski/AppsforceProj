
export const inputService = {
    handleInput
}


function handleInput(ev, inputType, setUser) {
    const { name, value } = ev.target

    if (inputType === 'Name') {
        if (value.trim().length >= 3 && value !== '') {


            if (name === 'title') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidTitleName: true,
                }))
            } else if (name === 'first') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidFirstName: true,
                }))
            } else if (name === 'last') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLastName: true,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                name: {
                    ...prevUser.name,
                    [name]: value
                }
            }))

        } else {

            if (name === 'title') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidTitleName: false,
                }))
            } else if (name === 'first') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidFirstName: false,
                }))
            } else if (name === 'last') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLastName: false,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                name: {
                    ...prevUser.name,
                    [name]: value
                }
            }))

        }


    } else if (inputType === 'Email') {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (value.toLowerCase().match(regex) && value !== '') {

            setUser(prevUser => ({
                ...prevUser,
                isValidEmail: true,
                [name]: value
            }))

        } else {

            setUser(prevUser => ({
                ...prevUser,
                isValidEmail: false,
                [name]: value
            }))

        }



    } else if (inputType === 'Location') {

        if (value !== '') {

            if (name === 'country') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLocationCountry: true,
                }))

            } else if (name === 'city') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLocationCity: true,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                location: {
                    ...prevUser.location,
                    [name]: value
                }
            }))

        } else {

            if (name === 'country') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLocationCountry: false,
                }))

            } else if (name === 'city') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidLocationCity: false,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                location: {
                    ...prevUser.location,
                    [name]: value
                }
            }))

        }

    } else if (inputType === 'Street') {

        if (value !== '') {

            if (name === 'name') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidStreetName: true,
                }))

            } else if (name === 'number') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidStreetNumber: true,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                location: {
                    ...prevUser.location,
                    street: {
                        ...prevUser.location.street,
                        [name]: value
                    }
                }
            }))

        } else {

            if (name === 'name') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidStreetName: false,
                }))

            } else if (name === 'number') {
                setUser(prevUser => ({
                    ...prevUser,
                    isValidStreetNumber: false,
                }))
            }

            setUser(prevUser => ({
                ...prevUser,
                location: {
                    ...prevUser.location,
                    street: {
                        ...prevUser.location.street,
                        [name]: value
                    }
                }
            }))

        }

    }

}