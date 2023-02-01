import React, { Component } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {

   return (
      <header className='d-flex container justify-content-between p-1 navbar-user align-items-center'>
         <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="img-fluid" alt="Sample image" />

         <div>
            <button type="button" className="btn btn-light btn-primary-light mx-2">Log in</button>
            <Link to="/signup" className='p-1'>
               <button type="button" className="btn btn-success btn-primary-dark mx-2">Sign up</button>
            </Link>
         </div>

      </header>
   )
}

export default HomePage;