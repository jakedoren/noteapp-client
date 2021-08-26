import React, { useEffect, useState } from 'react'
import './NotesLayout.css'
import axios from 'axios'
import Note from './Note'
import NoteInput from './NoteInput'

const NotesLayout = () => {
    const [notes, setNotes] = useState([])

    useEffect(async () => {
        const requestedNotes = await axios.get('http://localhost:8080/note')
        
        

        console.log(typeof requestedNotes.data)
        console.log( requestedNotes.data)
        setNotes(requestedNotes.data)

    }, [])

    return (
        <div className="notes-layout">
            <div className="notes-layout-wrapper">
                <NoteInput notes={notes} setNotes={setNotes} />
                {notes.map(note => {
                    return <Note title={note.title} body={note.body} />
                })}
            </div>
        </div>
    )
}

export default NotesLayout
