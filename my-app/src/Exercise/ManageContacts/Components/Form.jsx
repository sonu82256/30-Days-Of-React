import React, { useState } from 'react'

const Form = ({AddContactList}) => {
    const [data, setData] = useState({name: '', mail: ''})

    const handleEvent = (e) => {
        if(e.target.name === 'name'){
            // console.log(e.target.value)
            setData({...data, name : e.target.value})
        }
        else{
            // console.log(e.target.value)
            setData({...data, mail: e.target.value})
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        if(data.name === '' || data.mail === '')
        {
            alert('Please enter all the details');
            return;
        }
        AddContactList(data)
        setData({name: '', mail: ''})
    }

    return (
        <div className='form-container'>
            <h2>Add Contact</h2>
            <form action="">
                <label>Name: </label> <br />
                <input 
                    type="text" 
                    placeholder='Enter Name' 
                    name='name'
                    value={data.name}
                    onChange={handleEvent}
                /> <br />
                <label>Email:</label> <br />
                <input 
                    type="text" 
                    placeholder='Enter Email'  
                    name='mail'
                    value={data.mail}
                    onChange={handleEvent}
                /> <br />
                <button onClick={handleClick}>Add Contact</button>
            </form>
        </div>
    )
}

export default Form