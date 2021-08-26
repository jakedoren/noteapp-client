import React from 'react'
import './NoteInput.css'

const NoteInput = () => {
    return (
        <div className="note-input">
            <input type="text" placeholder="title" />
            <input type="text" placeholder="take a note..." />
        </div>
    )
}

export default NoteInput
