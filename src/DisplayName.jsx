import React, { useState } from 'react'

function DisplayName() {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [fullName, setFullName] = useState("")

    const firstName = (e) =>{
        setFirst(e.target.value)
    }

    const lastName = (e) => {
        setLast(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFullName(`${first} ${last}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            First Name:
            <input type='text' value={first} onChange={firstName} required/><br/>
            Last Name:
            <input type='text'  value={last} onChange={lastName} required/><br/>
            <button type='submit' >Submit</button>
        </form>
        {fullName && <p>Full Name: {fullName}</p>}
    </div>
  )
}

export default DisplayName