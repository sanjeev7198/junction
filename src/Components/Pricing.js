import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="container" style={{height: '100vh'}}>
        <div className="card-group">

          <div className="card py-2 m-3">
            <div className="card-header">Pro</div>
            <div className="card-body">
            <div className="price text-center my-2">$ 199</div>
              <ul>
                <li>hi</li>
                <li>hello</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              Buy Now
            </div>
          </div>

          <div className="card py-2 m-3">
            <div className="card-header">Ultra</div>
            <div className="card-body">
            <div className="price text-center my-2">$ 499</div>
              <ul>
                <li>hi</li>
                <li>hello</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              Buy Now
            </div>
          </div>

          <div className="card py-2 m-3">
            <div className="card-header">Mega</div>
            <div className="card-body">
              <div className="price text-center my-2">$ 999</div>
              <ul>
                <li>hi</li>
                <li>hello</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
