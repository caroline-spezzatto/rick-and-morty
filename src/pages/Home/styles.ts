import styled from 'styled-components'

export const LinksStyled = styled.div`
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    display: block;
  }
`

export const ContentStyled = styled.div`
  a {
    color: rgb(53, 53, 53);
    text-decoration: none;
  }

  h2 {
    margin-top: 14px;

    @media screen and (max-width: 400px) {
      margin-top: 0;
    }
  }
`
