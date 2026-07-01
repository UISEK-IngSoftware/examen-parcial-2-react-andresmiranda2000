import { useEffect, useState } from 'react'
import CharacterList from '../components/CharacterList.jsx'
import { getCharacters } from '../services/futuramaService.js'
import './Home.css'

function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.items)
    })
  }, [])

  return (
    <div className="app">
      <header className="home-header">
        <h1>Futurama</h1>
      </header>

      <main className="home-content">
        <h2>Personajes</h2>
        <CharacterList characters={characters} />
      </main>
    </div>
  )
}

export default Home
