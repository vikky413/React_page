import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Form = () => {
  return (
    <div className='bg-dark'>
    <header className="site-header sticky-top py-1">
  <nav className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
    <Link className="py-2 d-none d-md-inline-block" to="/cart" >Cart</Link>
  </nav>
</header>


<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div> 

  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
     
<Outlet />
</div>
  )
}

export default Form