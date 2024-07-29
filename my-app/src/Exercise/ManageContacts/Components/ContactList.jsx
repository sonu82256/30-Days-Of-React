import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const ContactList = ({contact, deleteContact}) => {

    // const handleDelete = (e) => {
    //     console.log(e.target)
    // }

    const contactList = contact.map((val) => {
        // console.log(contact)
        return(
           <div className='list-item' key={val.id}>
                <div>{val.data.name}</div>
                <div>{val.data.mail}</div>
                <span onClick={()=> deleteContact(val.id)}>
                    <IconButton aria-label="delete" disabled color="primary" >
                        <DeleteIcon/>
                    </IconButton>
                </span>
           </div>
        )
    });


    return (
        <div className='list-container'>
            <h2>Container List</h2>
            <div>{contactList}</div>
        </div>
    )
}

export default ContactList