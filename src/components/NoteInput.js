import React, { useState } from 'react'
import axios from 'axios'
import './NoteInput.css'

const NoteInput = ({notes, setNotes}) => {
    const [ note, setNote ] = useState({
        title: '',
        body: '',
    })

    const noteService = 'http://localhost:8080/note'

    const handleChange = (e) => {
        setNote({
            ...note, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {

        const createdNote = await axios.post(noteService, note)
        setNotes([...notes, note])

        if(createdNote) {
            console.log('success')
        }    
          
    }

    return (
        <div className="note-input">
            <input type="text" placeholder="title" name="title" value={note.title} onChange={handleChange} />
            <input type="text" placeholder="take a note..." name="body" value={note.body} onChange={handleChange} />
            <button onClick={handleSubmit} >Create</button>
        </div>
    )
}

export default NoteInput
