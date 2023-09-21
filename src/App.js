import React from "react";
import './App.css';
import Home from "./components/Home"
import { useState } from 'react'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [showInModal, setShowInModal] = useState(false);
  const [showOutModal, setShowOutModal] = useState(false);


  const openModal = () => {
    setShowInModal(true);
  };

  const closeModal = () => {
    setShowInModal(false);
  };
  const openOutModal = () => {
    setShowOutModal(true);
  };

  const closeOutModal = () => {
    setShowOutModal(false);
  };

  const openSignIN = () => {
    openOutModal();
    closeModal();
  }
  const openSignUp = () => {
    openModal();
    closeOutModal();
  }

  return (
    <div >
      <Navbar openModal={openModal} openOutModal={openOutModal} />
      <Home />



      {showInModal && (
        <div className="modal fade show d-flex align-items-center justify-content-center " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ height: '50px' }}>
                <h5 className="modal-title text-center">REGISTER</h5>
                <button type="button" className="close btn btn-danger"onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-dark shadow-lg">
                <div className="container bg-light mt-2 mb-2 border py-5 px-5 rounded-4">
                  <p className="h2 pb-3 text-center text-dark">REGISTER</p>
                  <div className="form-floating mb-3 shadow rounded-4">
                    <input className="form-control pr-5" type="text" name="name" placeholder="FullName" />
                    <label htmlFor="username">Name</label>
                  </div>
                  <div className="form-floating mb-3 shadow rounded-4">
                    <input className="form-control pr-5" type="text" name="mobile" placeholder="Mobile No" />
                    <label htmlFor="username">Mobile No</label>
                  </div>
                  <div className="form-floating mb-3 shadow rounded-4">
                    <input className="form-control pr-5" type="text" name="email" placeholder="Email" />
                    <label htmlFor="username">Email</label>
                  </div>
                  <div className="form-floating shadow rounded-4">
                    <input className="form-control" style={{ paddingRight: '100px' }} type="passoword" name="name" placeholder="Pass" />
                    <label htmlFor="username">Password</label>
                  </div><br />
                  
                  <button className="form-control btn rounded-3 shadow btn-success" type="submit" name="name"> Submit </button>
                  <p className='text-dark mt-2 text-end'> For Loigin <span className='text-info' style={{ cursor: 'pointer' }} onClick={openSignIN}>Click here</span></p>
                </div></div> </div></div></div>
      )}


      {showOutModal && (
        <div className="modal fade show d-flex align-items-center justify-content-center " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-dark" style={{ height: '50px' }}>
                <h5 className="modal-title text-light text-center">LOGIN</h5>
                <button type="button" className="close btn btn-danger rounded-circle" onClick={closeOutModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-dark  shadow-lg">
              
                <div className="container mt-2 mb-2 bg-light border py-5 px-5 rounded-4">
                  <p className="h2 pb-3 text-center text-dark">LOGIN</p>
                  <div className="form-floating mb-3 shadow rounded-4">
                    <input className="form-control pr-5" type="text" name="name" placeholder="Email" />
                    <label htmlFor="username">Email</label>
                  </div>
                  <div className="form-floating shadow rounded-4">
                    <input className="form-control" style={{ paddingRight: '100px' }} type="passoword" name="name" placeholder="Pass" />
                    <label htmlFor="username">Password</label>
                  </div><br />
                  <button className="form-control btn rounded-3 shadow btn-warning" type="submit" name="name"> Login </button>
                  <p className='text-dark mt-2 text-end'>Register <span className='text-info' style={{ cursor: 'pointer' }} onClick={openSignUp}>Click here</span></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
