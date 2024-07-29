import React, { useEffect, useState } from 'react'
import './Style.css'
import Form from './Components/Form'
import ContactList from './Components/ContactList'
import Header from './Components/Header'
import uuid4 from 'uuid4'

const ManageContacts = () => {

    const localStorageKey = 'contact';

    const [contact, setContact] = useState(() => {
        return JSON.parse(localStorage.getItem(localStorageKey)) || []
    })

    const AddContactList = (data) => {
        setContact([...contact ,{id:uuid4(), data}])
        // console.log(data ,'from app.js')
        // console.log(contact)
    }

    const deleteContact = (id) => {
        const updateList = contact.filter((val) => {
            return val.id !== id;
        })
        setContact(updateList)
        // console.log(id)
    }

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(contact));
    },[contact])

    // useEffect(() => {
    //     const item = JSON.parse(localStorage.getItem('contact')) || [];
    //     setContact(item);
    //     console.log(item)
    // },[])

    return (
        <>
            <Header />
            <Form AddContactList={AddContactList}/>
            <ContactList contact={contact} deleteContact={deleteContact}/>
        </>
        
    )
}

export default ManageContacts