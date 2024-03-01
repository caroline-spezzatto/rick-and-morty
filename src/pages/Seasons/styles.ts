import styled from 'styled-components'
import { Tab, Tabs } from '@mui/material'

export const CircularProgressStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TabsStyled = styled(Tabs)`
  .MuiTabs-indicator {
    display: none;
  }
`

export const TabStyled = styled(Tab)`
  font-weight: 600 !important;
  text-transform: none !important;

  &.Mui-selected {
    color: rgb(192, 223, 64) !important;
  }
`
