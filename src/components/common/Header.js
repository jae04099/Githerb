import React from 'react'
import logo from '../../image/githerb-logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header-grid-wrap">
                <div className="header-logo-wrap">
                    <div className="logo"><img src={logo} alt="logoimage" /></div>
                </div>
                <div className="header-nav-wrap">
                    <div className="header-flex-wrap">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li className="active"><a href="#">mypage</a></li>
                            <li><a href="#">overview</a></li>
                            <li><a href="#">setting</a></li>
                        </ul>
                        <button className="login">login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
