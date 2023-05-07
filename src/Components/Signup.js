import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="container" id='signin_page'>
        <div className="card">
            <div className="card-header">
                <h5>Sign up</h5>
            </div>
            <div className="card-body border">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger w-100">Sign up with Google</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-linkedin text-white w-100">Sign up with LinkedIn</button>
                    </div>
                </div>
                <form action='/'>
                    <div className="form-group pt-4">
                        <input type="email" placeholder='E-mail address' className='form-control' required/>
                    </div>
                    <div className="form-group pt-4">
                        <input type="password" placeholder='Password' className='form-control' required/>
                    </div>
                    <div className="form-group pt-4">
                        <input type="password" placeholder='Re-enter Password' className='form-control' required/>
                    </div>
                    <div className="text-center pt-4">
                        <button className="btn btn-primary" type='submit'>Sign up</button>
                    </div>
                    <div className="text-center pt-4">
                        Already have an account?&nbsp;<a href="/signin">Log in</a>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
