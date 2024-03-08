import { Grid, Typography } from '@mui/material'
import { CardCharacterStyled, ImageCardStyled } from './styles'
import { CardProps } from './interface'

export const Card = ({
  name,
  image,
  status,
  gender,
  origin,
  episode,
  species,
  onClick,
  onClose
}: CardProps) => {
  return (
    <CardCharacterStyled open={onClick} onClose={onClose}>
      <Grid container>
        <Grid item xs={6}>
          <Grid item>
            <ImageCardStyled src={image} alt={name} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              marginLeft={4}
              fontWeight={600}
              display="contents"
            >
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} display="grid">
          <Typography>
            <Typography fontWeight={600}>Status:</Typography> {status}
          </Typography>
          <Typography>
            <Typography fontWeight={600}>Specie:</Typography> {species}
          </Typography>
          <Typography>
            <Typography fontWeight={600}>Gender:</Typography> {gender}
          </Typography>
          <Typography>
            <Typography fontWeight={600}>Origin:</Typography> {origin}
          </Typography>
          <Typography>
            <Typography fontWeight={600}>Number of episodes:</Typography>
            {episode}
          </Typography>
        </Grid>
      </Grid>
    </CardCharacterStyled>
  )
}
