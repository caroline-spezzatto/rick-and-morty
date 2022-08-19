import { Grid } from '@mui/material'
import { CardCharacterStyled, ImageCardStyled, NameStyled } from './styles'
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
      <Grid container spacing={12}>
        <Grid item xs={5}>
          <ImageCardStyled src={image} alt={name} />
        </Grid>
        <Grid item xs={7} textAlign="left">
          <p>
            <b>Status:</b> {status}
          </p>
          <p>
            <b>Specie:</b> {species}
          </p>
          <p>
            <b>Gender:</b> {gender}
          </p>
          <p>
            <b>Origin:</b> {origin}
          </p>
          <p>
            <b>Number of episodes:</b> {episode}
          </p>
        </Grid>
      </Grid>
      <Grid container>
        <NameStyled>{name}</NameStyled>
      </Grid>
    </CardCharacterStyled>
  )
}
