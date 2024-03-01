import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '~graphql'
import { Autocomplete, Header, Pagination } from '~components'
import { CharactersResponse, CharactersData } from './interfaces'
import { Card } from './sections'
import {
  NameStyled,
  ImageStyled,
  FooterStyled,
  CharacterStyled,
  SearchFieldStyled,
  CircularProgressStyled
} from './styles'
import { Box, CircularProgress, Grid } from '@mui/material'

const Characters = () => {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [value, setValue] = useState<CharactersData>()

  const { data: dataCharacter, loading } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    {
      variables: { page: page, filter: { name: search } }
    }
  )

  const getCharacterData = (data: CharactersData) => {
    setOpen(true)
    setValue(data)
  }

  const charactersNames = dataCharacter?.characters.results.map(({ name }) => {
    return name
  })

  return (
    <>
      {loading ? (
        <CircularProgressStyled>
          <CircularProgress size={100} color="success" />
        </CircularProgressStyled>
      ) : (
        <>
          <Header />
          <div>
            <SearchFieldStyled>
              <Autocomplete
                label="Character"
                options={charactersNames?.sort()}
                onChange={(_, value) => setSearch(value)}
              />
            </SearchFieldStyled>
            {dataCharacter?.characters?.results.map(
              ({ name, image }, index) => {
                return (
                  <>
                    <CharacterStyled
                      onClick={() =>
                        getCharacterData(
                          dataCharacter?.characters?.results[index]
                        )
                      }
                    >
                      <Grid container alignItems="end">
                        <ImageStyled src={image} alt={`character ${name}`} />
                        <NameStyled>{name}</NameStyled>
                      </Grid>
                    </CharacterStyled>
                  </>
                )
              }
            )}
          </div>
          <FooterStyled>
            <Pagination
              count={42}
              onChange={(_, value) => {
                setPage(value)
              }}
            />
          </FooterStyled>
          <Card
            onClick={open}
            name={value?.name}
            image={value?.image}
            status={value?.status}
            gender={value?.gender}
            species={value?.species}
            origin={value?.origin?.name}
            episode={value?.episode?.length}
            onClose={() => {
              setOpen(false)
            }}
          />
        </>
      )}
    </>
  )
}

export default Characters
