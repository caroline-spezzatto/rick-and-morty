import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EPISODES } from '~graphql'
import { Header } from '~components'
import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import { EpisodesResponse } from './interfaces'
import { CircularProgressStyled, TabStyled, TabsStyled } from './styles'

const Seasons = () => {
  const [value, setValue] = useState(0)
  const seasons = `S0${value + 1}`

  const { data, loading } = useQuery<EpisodesResponse>(GET_EPISODES, {
    variables: {
      filter: {
        episode: seasons
      }
    }
  })

  const episodes = data?.episodes?.results

  return (
    <>
      {loading ? (
        <CircularProgressStyled>
          <CircularProgress size={100} color="success" />
        </CircularProgressStyled>
      ) : (
        <Box>
          <Header />
          <Box display="inline-block" maxWidth={500}>
            <Box sx={{ backgroundColor: '#969393', borderRadius: 2 }}>
              <TabsStyled
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
              >
                {episodes?.map((_, index) => (
                  <TabStyled key={index} label={`Season ${index + 1}`} />
                ))}
              </TabsStyled>
            </Box>
            <Box>
              {episodes?.map(({ name, air_date }, index) => (
                <Paper
                  sx={{
                    marginTop: 2,
                    width: '100%',
                    display: 'grid',
                    borderRadius: 2,
                    minHeight: '100px',
                    color: '#c4c4c4',
                    alignItems: 'center',
                    backgroundColor: '#535454'
                  }}
                >
                  <Typography color="#cedd95">{index + 1}</Typography>
                  <Typography fontWeight={900}>{name}</Typography>
                  <Typography>{air_date}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Seasons
