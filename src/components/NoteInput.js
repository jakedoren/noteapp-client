import React, { useState } from 'react'
import axios from 'axios'
import './NoteInput.scss'
import { AiFillPlusCircle } from 'react-icons/ai'


const NoteInput = ({notes, setNotes}) => {
    const [ note, setNote ] = useState({
        title: '',
        body: ''
    })

    const noteService = 'http://localhost:8080/note'

    const handleChange = (e) => {
        setNote({
            ...note, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {

        const createdNote = await axios.post(noteService, note)
        console.log(createdNote.data)
        setNotes([...notes, {...note, _id: createdNote.data._id}])

        if(createdNote) {
            console.log('success')
        }    
          
    }

    return (
        <div className="note-input">
            <div className="input-wrapper">
                <input type="text" placeholder="Title" name="title" value={note.title} onChange={handleChange} />
                <textarea type="text" placeholder="Take a note..." name="body" value={note.body} onChange={handleChange} />
                {/* <button onClick={handleSubmit} >Create</button> */}
                <AiFillPlusCircle onClick={handleSubmit} color="#7DBA40" className="plus" size="2em" />
            </div>
        </div>
    )
}

export default NoteInput
