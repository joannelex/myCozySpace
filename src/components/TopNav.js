import React from 'react'
import './TopNav.css'

export const TopNav = () => {

    return(
        <div className="topNavBar">
            <div>
                <a href="#about"><button className='nav-button'>about</button></a>
                <a href="#experience"><button className='nav-button'>experience</button></a>
                <a href="#projects"><button className='nav-button'>projects</button></a>
                <a href="#artAndGallery"><button className='nav-button'>art + gallery</button></a>
            </div>
            
            <a href="#contactMe"><button className='nav-button'>contact me</button></a>
      </div>
    )
}

export default TopNav