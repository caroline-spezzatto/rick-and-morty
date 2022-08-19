import styled from 'styled-components'

export const ImageStyled = styled.img`
  cursor: pointer;
  max-width: 250px;
  border-radius: 150px;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 400px) {
    max-width: 100px;
  }
`
