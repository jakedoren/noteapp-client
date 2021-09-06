import React from 'react'
import './Note.css'
import axios from 'axios'
import { FaTrash} from 'react-icons/fa'

const Note = ({title, body, id, setNotes, notes}) => {

    const handleClick = async () => {
        const deleteRequest = await axios.delete(`http://localhost:8080/note/${id}`)

        console.log(deleteRequest)

        const filteredNotes = notes.filter(note => note._id !== id)

        console.log(filteredNotes)

        setNotes(filteredNotes)

        // if(deleteRequest) {
        //     console.log('Success')
        // }
    }



    return <>
    <div className="note">
        <h1>{title}</h1>
        <p>{body} </p>
        <FaTrash onClick={handleClick} color="red"></FaTrash>
    </div>
    </>
}

export default Note
