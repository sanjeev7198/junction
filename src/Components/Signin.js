import React from 'react'
import './Signin.css'
const Signin = () => {
  return (
    <>
      <div className="container" id='signin_page'>
        <div className="card">
            <div className="card-header">
                <h5>Login to your account</h5>
            </div>
            <div className="card-body border">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger w-100">Log in with Google</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-linkedin text-white w-100">Log in with LinkedIn</button>
                    </div>
                </div>
                <form>
                    <div className="form-group pt-4">
                        <input type="email" placeholder='E-mail address' className='form-control' />
                    </div>
                    <div className="form-group pt-4">
                        <input type="password" placeholder='Password' className='form-control' />
                    </div>
                    <div className="justify-content-end d-flex pt-4">
                        <button className="btn btn-primary" type='submit'>Log In</button>
                    </div>
                    <div className="justify-content-end d-flex pt-4">
                        <a href="/signup">Sign Up</a>&nbsp; | &nbsp;<a href="/signin">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin
