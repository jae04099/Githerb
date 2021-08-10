import React from 'react'
import './Footer.css'
import logo from '../../image/githerb-logo.png'

const Footer = () => {
    return (
        <>
            
                <ul className="footerWrap"><div className="logoWrap">
                    <li><img src={logo} alt="logo" /><p className="copyright">Copyright @2021 Githerb</p><p className="rights">All right reserved</p></li></div>
                    <div className="etcWrap">
                        <div className="liWrap">
                    <li><h5>Location</h5><address>Seoul<br/>South Korea</address></li>
                    <li className="contactWrap"><h5>Contact</h5><i className="fab fa-twitter"> Twitter</i><i className="fab fa-github"> Github</i></li></div>
                    </div>
                </ul>
        </>
    )
}

export default Footer


