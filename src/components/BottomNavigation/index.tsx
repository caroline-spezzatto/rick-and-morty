import { BottomNavigation as BottomNavigationMui } from '@mui/material'
import { BottomNavigationActionStyled } from './styles'
import { BottonNavigationProps } from './interfaces'

export const BottomNavigation = ({
  label,
  value,
  onChange
}: BottonNavigationProps) => {
  return (
    <BottomNavigationMui showLabels value={value} onChange={onChange}>
      {label.map((item: string) => {
        return <BottomNavigationActionStyled label={item} key={item} />
      })}
    </BottomNavigationMui>
  )
}
