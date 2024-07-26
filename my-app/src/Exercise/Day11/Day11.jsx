import React, { useState } from 'react';
import './Style.css'; 

const Day11 = () => {
    const [position, setPosition] = useState({ top: 50, left: 50 });

    const handleMouseOver = () => {
        const newTop = Math.floor(Math.random() * 90); 
        const newLeft = Math.floor(Math.random() * 90); 
        setPosition({ top: newTop, left: newLeft });
    };

    return (
        <div className="container">
            <button
                className="uncatchable-button"
                onMouseOver={handleMouseOver}
                style={{ top: `${position.top}%`, left: `${position.left}%`, position: 'absolute' }}
            >
                Catch Me!
            </button>
        </div>
    );
};

export default Day11;