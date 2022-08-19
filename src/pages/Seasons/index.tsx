import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SEASONS } from '~graphql'
import { BottomNavigation, CircularProgress, Header } from '~components'
import { EpisodesResponse } from './interfaces'
import {
  BoxStyled,
  ContentStyled,
  EpisodesStyled,
  EmptyCardStyled,
  CircularProgressStyled
} from './styles'

const Seasons = () => {
  const [value, setValue] = useState(0)

  const { data, loading } = useQuery<EpisodesResponse>(GET_SEASONS)

  const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5']

  const numberOfSeasons = [0, 1, 2, 3, 4]

  const selectedSeason = numberOfSeasons.find(
    (season) => season === value
  )

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
          <ContentStyled>
            <BoxStyled>
              <BottomNavigation
                value={value}
                label={seasons}
                onChange={(_, newValue) => {
                  setValue(newValue)
                }}
              />
            </BoxStyled>
            <div>
              {value === selectedSeason &&
                getEpisodes(`0${selectedSeason + 1}`)?.map(
                  ({ name, air_date }, index) => {
                    return (
                      <EpisodesStyled key={name}>
                        <p>{index + 1}</p>
                        <p>{name}</p>
                        <p>{air_date}</p>
                      </EpisodesStyled>
                    )
                  }
                )}
              {noEpisodes && (
                <EmptyCardStyled>Unavailable episodes</EmptyCardStyled>
              )}
            </div>
          </ContentStyled>
        </>
      )}
    </>
  )
}

export default Seasons
