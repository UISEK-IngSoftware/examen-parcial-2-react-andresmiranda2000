import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import './CharacterCard.css'

function CharacterCard({ character }) {
  return (
    <Card className="character-card">
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        className="character-image"
      />

      <CardContent className="character-content">
        <Typography variant="h6" component="h3" className="character-name">
          {character.name}
        </Typography>

        <Stack direction="row" spacing={1} className="character-tags">
          <Chip label={character.gender} size="small" />
          <Chip label={character.status} size="small" color="success" />
        </Stack>
      </CardContent>

    </Card>
  )
}

export default CharacterCard
