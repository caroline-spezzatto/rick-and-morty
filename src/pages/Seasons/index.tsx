import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SEASONS } from '~graphql'
import { Header } from '~components'
import { EpisodesResponse } from './interfaces'
import { CircularProgressStyled, TabStyled, TabsStyled } from './styles'
import { Box, CircularProgress, Paper, Typography } from '@mui/material'

const Seasons = () => {
  const [value, setValue] = useState(0)

  const { data, loading } = useQuery<EpisodesResponse>(GET_SEASONS)

  const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5']

  const numberOfSeasons = [0, 1, 2, 3, 4]

  const selectedSeason = numberOfSeasons.find(season => season === value)

  const getEpisodes = (season: string) => {
    return data?.episodes?.results.filter(({ episode }) => {
      const filter = episode?.substring(1, 3)
      return filter === season
    })
  }

  const noEpisodes = getEpisodes(`0${value + 1}`)?.length === 0

  return (
    <>
      {loading ? (
        <CircularProgressStyled>
          <CircularProgress size={100} color="success" />
        </CircularProgressStyled>
      ) : (
        <>
          <Header />
          <Box display="inline-block" maxWidth={500}>
            <Box sx={{ backgroundColor: '#969393', borderRadius: 2 }}>
              <TabsStyled
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
              >
                {seasons.map(season => (
                  <TabStyled label={season} key={season} />
                ))}
              </TabsStyled>
            </Box>
            <Box>
              {noEpisodes ? (
                <Paper
                  sx={{
                    marginTop: 2,
                    width: '100%',
                    borderRadius: 2,
                    minHeight: '100px',
                    color: '#c4c4c4',
                    backgroundColor: '#535454'
                  }}
                  elevation={0}
                >
                  <Typography>Unavailable episodes</Typography>
                </Paper>
              ) : (
                <>
                  {getEpisodes(`0${(selectedSeason as number) + 1}`)?.map(
                    ({ id, name, air_date }, index) => (
                      <Paper
                        sx={{
                          marginTop: 2,
                          width: '100%',
                          borderRadius: 2,
                          minHeight: '100px',
                          color: '#c4c4c4',
                          backgroundColor: '#535454'
                        }}
                        key={id}
                        elevation={0}
                      >
                        <Typography>{index + 1}</Typography>
                        <Typography>{name}</Typography>
                        <Typography>{air_date}</Typography>
                      </Paper>
                    )
                  )}
                </>
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default Seasons
