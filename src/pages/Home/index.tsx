import { Link } from 'react-router-dom'
import Episodes from '../../archives/seasons.png'
import Locations from '../../archives/locations.png'
import Characters from '../../archives/characters.png'
import { Header } from '~components'
import { ContentStyled, LinksStyled } from './styles'
import Menu from './section/Menu'

const Home = () => {
  return (
    <ContentStyled>
      <Header />
      <LinksStyled>
        <Link to="/characters">
          <Menu image={Characters} text="Characters" />
        </Link>
        <Link to="/seasons">
          <Menu image={Episodes} text="Seasons" />
        </Link>
        <Link to="/locations">
          <Menu image={Locations} text="Locations" />
        </Link>
      </LinksStyled>
    </ContentStyled>
  )
}

export default Home
