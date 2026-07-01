import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import CharacterList from '../components/CharacterList.jsx'
import { getCharacters } from '../services/futuramaService.js'
import './Home.css'

function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await getCharacters()
        setCharacters(data.items || [])
      } catch {
        setError('No se pudieron cargar los personajes.')
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [])

  function renderContent() {
    if (loading) {
      return (
        <div className="home-state">
          <CircularProgress />
          <Typography>Cargando personajes...</Typography>
        </div>
      )
    }

    if (error) {
      return <Alert severity="error">{error}</Alert>
    }

    if (characters.length === 0) {
      return <Alert severity="info">No hay personajes para mostrar.</Alert>
    }

    return <CharacterList characters={characters} />
  }

  return (
    <div className="app">
      <header className="home-header">
        <h1>Futurama</h1>
      </header>

      <main className="home-content">
        <h2>Personajes</h2>
        {renderContent()}
      </main>
    </div>
  )
}

export default Home
