import { MenuProps } from './interface'
import { ImageStyled } from './styles'

const Menu = ({ image, alt, text }: MenuProps) => {
  return (
    <>
      <ImageStyled src={image} alt={alt} />
      <h2>{text}</h2>
    </>
  )
}

export default Menu
