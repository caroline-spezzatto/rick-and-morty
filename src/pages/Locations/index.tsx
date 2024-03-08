import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CircularProgress, Typography } from '@mui/material'
import { GET_LOCATIONS } from '~graphql'
import { LocationsResponse } from './interfaces'
import { Header, Accordion, Pagination } from '~components'
import { CircularProgressStyled, ContentStyled, FooterStyled } from './styles'

const Locations = () => {
  const [page, setPage] = useState(1)

  const { data, loading } = useQuery<LocationsResponse>(GET_LOCATIONS, {
    variables: { page: page }
  })

  const locations = data?.locations?.results

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
            {locations?.map(({ id, name, type, dimension, residents }) => {
              return (
                <Accordion
                  id={id}
                  content={
                    <>
                      <Typography
                        fontWeight={600}
                      >{`Location: ${name}, ${type}`}</Typography>
                      <Typography>{`Dimension:  ${dimension}`}</Typography>
                    </>
                  }
                >
                  <>
                    <Typography fontWeight={600}>Residents:</Typography>
                    {residents.map(({ name }) => {
                      return <Typography>{name}</Typography>
                    })}
                    {residents.length <= 0 && (
                      <Typography>No residents</Typography>
                    )}
                  </>
                </Accordion>
              )
            })}
          </ContentStyled>
          <FooterStyled>
            <Pagination
              count={7}
              page={page}
              onChange={(_, value) => {
                setPage(value)
              }}
            />
          </FooterStyled>
        </>
      )}
    </>
  )
}

export default Locations
