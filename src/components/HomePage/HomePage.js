import './HomePage.css'
import { Link } from 'react-router-dom';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import image5 from '../../images/image5.png'


const HomePage = () => {
   return (
      <>
         <header className='d-flex justify-content-between p-1 px-5 navbar-user align-items-center'>
            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" />

            <div>
               <button type="button" className="btn btn-light btn-primary-light mx-2">Log in</button>
               <Link to="/signup" className='home-signup-btn'>
                  <button type="button" className="btn btn-success btn-primary-dark mx-2">Sign up</button>
               </Link>
            </div>

         </header>
         <section className='home-row1 background w-100'>
            <div className="d-flex flex-wrap text-start">
               <div className="home-info">
                  <strong className="heading h1">
                     Less stress when sharing expenses
                  </strong>
                  <h1 className="text-green heading">on trips.</h1>
                  <ul className='Home-pg-icons'>
                     <li><i className="fa-solid fa-plane"></i></li>
                     <li><i className="fa fa-house-chimney"></i></li>
                     <li><i className="fa-solid fa-heart"></i></li>
                     <li><i className="fa-solid fa-star-of-life"></i></li>
                  </ul>
                  <p className='description'>
                     Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                  </p>
                  <Link to="/signup" className='home-signup-btn'>
                     <button type="button" className="btn btn-success btn-primary-dark mb-4 btn-lg">Sign up</button>
                  </Link>
                  <p>
                     Free for <i className="fa-brands fa-apple"></i> iphone, <i className="fa-brands fa-android"> </i> Android and web.
                  </p>
               </div>
            </div>
            <div className='large-palne d-none d-lg-block'>
               <i className="fa-solid fa-plane d-none d-lg-block"></i>
            </div>
         </section>

         <section className='cards-container'>
            <div className="row">
               <div className="col box">
                  <div className="card text-center box-bg fill-grey">
                     <div className="card-body">
                        <strong className="card-title">Track balances</strong>
                        <p className="card-text text-center mt-2">Settle up with a friend and record any cash or online payment.
                        </p>
                     </div>
                     <div>
                        <img className=" mt-3" src={image1} />
                     </div>
                  </div>
               </div>

               <div className="col box">
                  <div className="card text-center box-bg fill-green">
                     <div className="card-body">
                        <strong className="card-title">Organize expenses</strong>
                        <p className="card-text text-center mt-2">Settle up with a friend and record any cash or online payment.</p>
                     </div>
                     <div>
                        <img className=" mt-3" src={image2} />
                     </div>
                  </div>
               </div>

               <div className='w-100'></div>
               <div className="col box">
                  <div className="card text-center box-bg fill-orange">
                     <div className="card-body">
                        <strong className="card-title">Add expenses easily</strong>
                        <p className="card-text text-center mt-2">Quickly add expenses on the go before you forget who paid.</p>
                     </div>
                     <div>
                        <img className=" mt-3" src={image3} />
                     </div>
                  </div>
               </div>
               <div className="col box">
                  <div className="card text-center box-bg fill-grey">
                     <div className="card-body">
                        <strong className="card-title">Pay friends back</strong>
                        <p className="card-text text-center mt-2">Settle up with a friend and record any cash or online payment.</p>
                     </div>
                     <div>
                        <img className=" mt-3" src={image4} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row box">
               <div className="row card text-center box-bg fill-purple">
                  <div className="bottom-box">
                     <div>
                        <strong className="card-title">Get even more with PRO</strong>
                        <p className="card-text text-center mt-2">Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                        <div className='btn'>
                           <Link to="/signup">
                              <button>Sign up</button>
                           </Link>
                        </div>
                     </div>
                     <div className='mt-5'>
                        <img src={image5} />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default HomePage;