import React from 'react'
import './Footer.css'
import logo from './junction-logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li>
                                <h3>Useful Links</h3>
                            </li>
                            <li>
                                <a to=" https://winsurtech.com/winsurtech-rest-apis-service-level-agreement/" target="_blank" className="text-white footerfont"> Service Level Agreement </a>
                            </li>
                            <li>
                                <a to="https://winsurtech.com/terms-and-conditions" target="_blank" className="text-white tc">Terms and Conditions</a>
                            </li>
                            <li>
                                <a to="https://winsurtech.com/privacy-policy" className="text-white tc" target="_blank">Privacy
                                            Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>
                                <h3>Corporate</h3>
                            </li>
                            <li>
                                <a to="/contactus" target="_blank" className="text-white footerfont"> Contact Us </a>
                            </li>
                            <li>
                                <a to="/pricing" className="text-white tc" target="_blank">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <hr />
                    <div className="col">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Winsurtech" id="falogo"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://www.twitter.com/Winsurtech" id="falogo"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.linkedin.com/company/winsurtech" id="falogo"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.youtube.com/channel/UCTay2tF7PbmFajzy1ODjSSA" id="falogo"><FontAwesomeIcon icon={faYoutube} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col company_rights">
                        <ul>
                            <li>©2021-2024 WinsurTech Software Solutions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
