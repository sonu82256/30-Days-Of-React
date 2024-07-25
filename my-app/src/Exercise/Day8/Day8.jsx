import React, { useState } from 'react'
import Header from './Components/Header'

import './CSS/Style.css'
import Footer from './Components/Footer'
import BodyContent from './Components/BodyContent'



const Day8 = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        const update = theme === 'light' ? 'dark' : 'light';
        setTheme(update);
        console.log(update); // Logging the updated theme
    };
    
    return (
        <>
            <div className={`header-container-${theme}`} >
                <Header />
            </div>
            <div className={`body-container-${theme}`}  >
                <BodyContent changeTheme = {changeTheme} theme = {theme} />
            </div>
            <div className={`footer-container-${theme}`} >
                <Footer />
            </div>
        </>
    )
}

export default Day8