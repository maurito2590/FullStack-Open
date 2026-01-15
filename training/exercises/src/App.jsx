import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)


  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }

  useEffect(hook, [])
 

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < .5,
      id: notes.length + 1,
    }

    setNotes(notes.concant(noteObject))
    setNotes('')
  }

      const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important === true)


  const handleNoteChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        < input 
        value={newNote}
        onChange={handleNoteChange}/>
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default App 