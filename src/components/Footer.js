import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <footer className="container-fluid footer mt-auto py-3 bg-dark">
            <div>
            <span className=" text-light">
          © {new Date().getFullYear()} ThreeHomes
            </span>
        </div>
        </footer>
   
    </div>
  )
}

export default Footer