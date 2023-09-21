import React from 'react'
import logo from '../assets/logo.png'

const Navbar = ({openModal,openOutModal}) => {
  return (
    <nav className="navbar navbar-sm navbar-expand-sm navbar-light"  style={{backgroundColor:'white'}  } >
            <div className="container-fluid"> 
            <a href="/" className="navbar-brand text-info" >
		  <img className='logo-img' src={logo} width='100px' alt="Logo"/></a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{display:'flex', justifyContent:'center'}}>
                            <a className="nav-link btn btn-info w-100" style={{fontSize:'20px', fontWeight:'700', color:'black'}} href='/'>Home</a>
                        </li>
                        <li className="nav-item" style={{display:'flex', justifyContent:'center'}}>
                            <button style={{fontSize:'20px', fontWeight:'700', color:'black'}} onClick={openOutModal} className="nav-link btn btn-success w-100 p-2" >Login</button>
                        </li>
                        <li className="nav-item" style={{display:'flex', justifyContent:'center'}}>
                            <button style={{fontSize:'20px', fontWeight:'700', color:'black'}} onClick={openModal} className="nav-link btn btn-warning w-100 p-2" >Register</button>
                        </li>            
                    </ul>
                </div>               
            </div>
        </nav>
  )
}

export default Navbar