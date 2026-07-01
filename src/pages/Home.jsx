import CharacterList from '../components/CharacterList.jsx'
import './Home.css'

const characters = [
  {
    id: 1,
    name: 'Philip J. Fry',
    gender: 'MALE',
    status: 'ALIVE',
    image: 'https://futuramaapi.com/static/img/human/philip-j_-fry.webp',
  },
  {
    id: 2,
    name: 'Morgan Proctor',
    gender: 'FEMALE',
    status: 'ALIVE',
    image: 'https://futuramaapi.com/static/img/human/morgan-proctor.webp',
  },
  {
    id: 3,
    name: 'Mugger',
    gender: 'MALE',
    status: 'ALIVE',
    image: 'https://futuramaapi.com/static/img/human/mugger.webp',
  },
  {
    id: 4,
    name: 'Ned Farnsworth',
    gender: 'MALE',
    status: 'ALIVE',
    image: 'https://futuramaapi.com/static/img/human/ned-farnsworth.webp',
  },
  {
    id: 5,
    name: 'Nina',
    gender: 'FEMALE',
    status: 'ALIVE',
    image: 'https://futuramaapi.com/static/img/human/nina.webp',
  },
  {
    id: 6,
    name: 'Nichelle Nichols',
    gender: 'FEMALE',
    status: 'UNKNOWN',
    image: 'https://futuramaapi.com/static/img/human/nichelle-nichols-_character_.webp',
  },
]

function Home() {
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
