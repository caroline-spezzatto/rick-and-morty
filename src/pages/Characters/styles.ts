import styled from 'styled-components'

export const SearchFieldStyled = styled.div`
  .MuiAutocomplete-root {
    max-width: 380px;
    margin-left: 60px;
    border-radius: 6px;
    margin-bottom: 30px;
    background-color: rgb(105, 105, 105);

    .Mui-focused {
      color: rgb(182, 183, 179);
    }

    .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: rgb(182, 183, 179);
      }
    }

    @media screen and (max-width: 400px) {
      margin-left: 36px;
      margin-right: 36px;
    }
  }

  .MuiInputLabel-root {
    color: rgb(182, 183, 179);
  }

  .MuiAutocomplete-popupIndicator {
    color: rgb(182, 183, 179);
  }
`
export const CharacterStyled = styled.div`
  margin: 20px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  transition: 0.5s all ease-in-out;

  :hover img {
    transform: scale(1.1);
  }
  :hover p {
    transform: scale(1.1);
  }
`

export const ImageStyled = styled.img`
  border-radius: 10px;
`

export const NameStyled = styled.p`
  width: 100%;
  font-size: 20px;
  position: absolute;
  color: rgb(255, 215, 0);
  text-shadow: 0 0 4px rgb(0, 0, 0);
`

export const FooterStyled = styled.footer`
  .MuiPagination-ul {
    margin-top: 20px;
    margin-bottom: 40px;
    justify-content: center;
  }

  .MuiPaginationItem-root {
    color: rgb(182, 183, 179);
    background-color: rgb(105, 105, 105);
  }

  .css-lqq3n7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    color: rgb(105, 105, 105);
    background-color: rgb(192, 192, 192);
  }
`

export const CircularProgressStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
