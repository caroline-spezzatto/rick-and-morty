import styled from 'styled-components'
import { Box } from '@mui/material'

export const CircularProgressStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentStyled = styled.div`
  margin-top: 30px;
  min-height: 100vh;
  display: inline-block;

  @media screen and (max-width: 400px) {
    padding: 30px;
    min-height: 0;
  }
`

export const BoxStyled = styled(Box)`
  width: 500px;

  .css-16lloyr-MuiBottomNavigation-root {
    border-radius: 10px;
    background-color: rgb(150, 147, 147);
  }

  .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected {
    color: rgb(192, 223, 64);
  }

  @media screen and (max-width: 400px) {
    width: 320px;

    .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root {
    min-width: 0;
  }

  .MuiBottomNavigationAction-label {
    font-size: 12px;
  }
  }
`

export const EpisodesStyled = styled.div`
  min-width: 500px;
  margin-top: 10px;
  border-radius: 10px;
  color: rgb(196, 196, 196);
  border: 1px solid rgb(83, 84, 84);
  background-color: rgb(83, 84, 84);

  @media screen and (max-width: 400px) {
    min-width: 300px;
  }
`

export const EmptyCardStyled = styled.div`
  padding: 50px;
  margin-top: 10px;
  border-radius: 10px;
  color: rgb(196, 196, 196);
  border: 1px solid rgb(83, 84, 84);
  background-color: rgb(83, 84, 84);
`
