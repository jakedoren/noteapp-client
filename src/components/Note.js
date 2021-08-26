import React from 'react'
import './Note.css'

const Note = ({title, body}) => {
    return <>
    <div className="note">
        <h1>{title}</h1>
        <p>{body} </p>
    </div>
    </>
}

export default Note
