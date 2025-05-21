import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Timeline data di esempio
const events = [
  { id: 1, year: '2525', title: 'Primo contatto Covenant', description: 'L’umanità incontra i Covenant per la prima volta.' },
  { id: 2, year: '2552', title: 'Battaglia di Reach', description: 'Uno degli eventi più importanti della guerra contro i Covenant.' },
  { id: 3, year: '2557', title: 'Halo 4', description: 'Master Chief si risveglia e affronta una nuova minaccia.' },
  // Aggiungi altri eventi qui
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="timeline-container">
      <h1>Halo Timeline</h1>
      <div className="timeline-scroll">
        {events.map(event => (
          <div key={event.id} className="timeline-event">
            <div className="event-year">{event.year}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
