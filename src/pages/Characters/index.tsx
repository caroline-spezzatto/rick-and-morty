import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Box, CircularProgress, Grid, TextField } from '@mui/material'
import { GET_CHARACTERS } from '~graphql'
import { Header, Pagination } from '~components'
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

  const characters = dataCharacter?.characters.results || []
  const charactersNames = characters?.map(({ name }) => name)

  const getCharacterData = (data: CharactersData) => {
    setOpen(true)
    setValue(data)
  }

  return (
    <>
      <Header />
      <Box>
        <SearchFieldStyled>
          <TextField
            type="search"
            value={search}
            label="Character"
            onChange={e => setSearch(e.target.value)}
          />
        </SearchFieldStyled>
        {charactersNames
          ?.filter(name => name.toLowerCase().includes(search.toLowerCase()))
          .map((name, index) => (
            <CharacterStyled
              key={index}
              onClick={() => getCharacterData(characters?.[index])}
            >
              <Grid container alignItems="end">
                <ImageStyled
                  src={characters?.[index].image}
                  alt={`character ${name}`}
                />
                <NameStyled>{name}</NameStyled>
              </Grid>
            </CharacterStyled>
          ))}
      </Box>
      {loading ? (
        <CircularProgressStyled>
          <CircularProgress size={100} color="success" />
        </CircularProgressStyled>
      ) : (
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
      )}
      {!loading && !!characters?.length && (
        <FooterStyled>
          <Pagination
            count={42}
            page={page}
            onChange={(_, value) => {
              setPage(value)
            }}
          />
        </FooterStyled>
      )}
    </>
  )
}

export default Characters
