import Grid from '@mui/material/Grid'
import CharacterCard from './CharacterCard.jsx'
import './CharacterList.css'

function CharacterList({ characters }) {
  return (
    <Grid container spacing={2} className="character-list">
      {characters.map((character) => (
        <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CharacterList
