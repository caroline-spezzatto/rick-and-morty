import styled from 'styled-components'
import { Dialog } from '@mui/material'

export const CardCharacterStyled = styled(Dialog)`
  .MuiDialog-paper {
    padding: 20px;
    min-width: 500px;
    border-radius: 20px;
    background-color: rgb(192, 192, 192);

    @media screen and (max-width: 400px) {
      padding: 10px;
    }
  }
`

export const ImageCardStyled = styled.img`
  max-width: 200px;
  margin-top: 20px;
  border-radius: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 400px) {
    max-width: 120px;
  }
`
