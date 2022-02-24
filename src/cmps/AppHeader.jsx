import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { toggleMenu } from '../store/actions/appSettingsActions'
import { ReactComponent as Logo } from '../assets/icons/appsForce-logo.svg'


export const AppHeader = () => {
    const { isMenuOpen } = useSelector(state => state.appSettingsModule)
    const dispatch = useDispatch()


    const [isResized, setIsResized] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        handleResize()
        handleScroll()
        return () => {
            window.addEventListener('resize', handleResize)
            window.addEventListener('scroll', handleScroll)
        }
    }, [])

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsResized(true)
        } else {
            setIsResized(false)
        }
    }

    const handleScroll = () => {
        if (window.pageYOffset === 0) {
            setIsScrolled(false)
        } else {
            setIsScrolled(true)

        }
    }

    const setMenu = () => {
        if (isResized) {
            dispatch(toggleMenu())
        }
    }

    return (

        <header className="content">
            <div className={`appHeader-screen ${isMenuOpen ? 'show-screen' : ''}`} onClick={setMenu}></div>
            <nav className={`appHeader-nav-color ${isScrolled ? 'not-at-top' : ''}`} >
                <div className="appHeader-nav flex justify-between container">

                    <div className="flex auto-center">

                        <Link to="/">
                            <div className="logo flex auto-center"><Logo /></div>
                        </Link>

                    </div>

                    <ul className={`appHeader-nav-links flex ${isMenuOpen ? 'open-nav-links' : ''}`}>
                        <li onClick={setMenu}><NavLink exact to="/">Home</NavLink></li>
                        <li onClick={setMenu}><NavLink to="/about">About</NavLink></li>
                    </ul>

                    <div className=" btn-holder flex auto-center">
                        <button className="btn1" onClick={setMenu}>☰</button>
                    </div>

                </div>
            </nav>
        </header>
    )
}



