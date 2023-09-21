import React from 'react'
import Slider from './Slider'



const Home = () => {
    return (
        <React.Fragment>
            <section>
                <Slider />
                <div className='wrapper'>
                    <div className='mt-2 pt-5'>
                        <h1 className='container title' >ThreeHomes Designs and Builds.</h1>
                    </div>
                    <div className='mt-5'>
                        <p className='paragraph'>We are the largest design set-up in India with over 15 years of experience in home interiors and modular solutions</p>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-warning '>Read More..</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export default Home