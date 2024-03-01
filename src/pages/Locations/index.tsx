import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { GET_LOCATIONS } from '~graphql'
import { LocationsResponse } from './interfaces'
import { Header, Accordion, Pagination } from '~components'
import { CircularProgressStyled, ContentStyled, FooterStyled } from './styles'

const Locations = () => {
  const [page, setPage] = useState(1)

  const { data, loading } = useQuery<LocationsResponse>(GET_LOCATIONS, {
    variables: { page: page }
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
          <ContentStyled>
            {data?.locations?.results?.map(
              ({ id, name, type, dimension, residents }) => {
                return (
                  <Accordion
                    id={id}
                    content={
                      <>
                        <b>{`Location: ${name}, ${type}`}</b>
                        <p>{`Dimension:  ${dimension}`}</p>
                      </>
                    }
                  >
                    <>
                      <b>Residents:</b>
                      {residents.map(({ name }) => {
                        return <p>{name}</p>
                      })}
                      {residents.length <= 0 && <p>No residents</p>}
                    </>
                  </Accordion>
                )
              }
            )}
          </ContentStyled>
          <FooterStyled>
            <Pagination
              count={7}
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
