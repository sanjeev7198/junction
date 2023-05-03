import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
        <div className="row title-row">
          <div className="col-md-6 m-5">
               <h1 className="card-title text-left heading">InsurTech File Distribution Made Simple</h1>
               <p className='sub-heading'>AL3, EDocs, and other Uploads and Downloads securely and easily</p>
               <p>Carriers, MGAs, Agencies</p>
               <p><Link href="/" className="btn btn-primary button" role="button">Sign Up for Free</Link></p>
          </div>
     </div>
     <div className="quote row justify-content-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
               <blockquote><em>“A better way to share Policy Transaction and Direct Bill Commission Downloads (AL3
                         files), eDocs, Claim Downloads, Alerts, Notifications, and all other InsurTech files.”</em>
               </blockquote>
          </div>
          <div className="col-md-2"></div>
     </div>
     <div className="container pb-5">
          <div className="row justify-content-center p-4">
               <h1 className="body-heading">Why WinsurTech Junction?</h1>
          </div>
          <div className="card-group">
               <div className="row body-content">
                    <div className="col-auto py-2 reveal">
                         <div id="card">
                              <div className="card-header d-flex justify-content-center align-items-center"
                                   id="card-header">
                                   <i className="fa-solid fa-share-from-square fa-2xl"></i>
                              </div>
                              <div className="card-body">
                                   <p className="text-heading">Collaborate Easily</p>
                                   <p className="card-text">Carriers, MGAs, and Agencies share files easily in a secure
                                        manner.</p>
                              </div>
                         </div>
                    </div>
                    <div className="col-auto py-2 reveal">
                         <div id="card">
                              <div className="card-header d-flex justify-content-center align-items-center"
                                   id="card-header">
                                   <i className="fa-solid fa-cloud-arrow-down fa-2xl"></i>
                              </div>
                              <div className="card-body">
                                   <p className="text-heading">Free Downloads</p>
                                   <p className="card-text">Absolutely free if you just want to download files <strong>from
                                             the user interface.</strong></p>
                              </div>
                         </div>
                    </div>
                    <div className="col-auto py-2 reveal">
                         <div id="card">
                              <div className="card-header d-flex justify-content-center align-items-center"
                                   id="card-header">
                                   <i className="fa-solid fa-business-time fa-2xl"></i>
                              </div>
                              <div className="card-body">
                                   <p className="text-heading">Flexible Plans</p>
                                   <p className="card-text">Easy process to sign up, genuine pricing, start immediately
                                        after signup.</p>
                              </div>
                         </div>
                    </div>
                    <div className="col-auto py-2 reveal">
                         <div id="card">
                              <div className="card-header d-flex justify-content-center align-items-center"
                                   id="card-header">
                                   <i className="fa-solid fa-envelope-open-text fa-2xl"></i>
                              </div>
                              <div className="card-body">
                                   <p className="text-heading">Free API Access</p>
                                   <p className="card-text">A single subscription gives you API access for free along with
                                        UI features.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="row pt-5 justify-content-center">
               <a className="btn btn-primary w-25" href="/accounts/signup/">Get Started Now</a>
          </div>
     </div>
    </>
  )
}

export default Homepage