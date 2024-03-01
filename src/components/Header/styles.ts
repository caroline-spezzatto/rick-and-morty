import styled from 'styled-components'

export const HeaderStyled = styled.header`
  img {
    max-width: 400px;
    margin-top: 50px;
    margin-bottom: 80px;

    @media screen and (max-width: 400px) {
      max-width: 300px;
    }
  }
`
