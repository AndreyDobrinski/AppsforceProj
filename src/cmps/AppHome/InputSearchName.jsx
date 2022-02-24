import { useState } from "react"
import { useDispatch } from "react-redux"
import { loadUsers } from "../../store/actions/userActions"

export const InputSearchName = ({ filterName, holder }) => {

    const dispatch = useDispatch()


    const [inputValue, setInputValue] = useState('')

    const handleNameInput = ({ target }) => {
        setInputValue(target.value)
        const filter = target.value
        dispatch(loadUsers(filter, filterName))
    }

    return (
        <div className="app-search-book">
            <div className="input-holder flex auto-center">
                <input name={filterName} value={inputValue} onChange={handleNameInput} placeholder={holder} />
            </div>
        </div>
    )
}