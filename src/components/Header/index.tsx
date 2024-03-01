import { Link } from 'react-router-dom'
import Logo from '../../archives/logo.png'
import { HeaderStyled } from './styles'

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </HeaderStyled>
  )
}
