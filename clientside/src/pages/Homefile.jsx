import React from 'react'
import { Link } from 'react-router-dom'

const Homefile = () => {
  return (
    <div>
        <div>
  
  <div class="bg-warning text-white px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Welcome To Our Website</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to='/shop-now' type="button" class="btn bg-danger btn-outline-dark btn-lg px-4 col-md-3">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
    
      
  
    
    
  
  
   
    
  
  </div>
    </div>
  )
}

export default Homefile