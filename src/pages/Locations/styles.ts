import styled from 'styled-components'

export const CircularProgressStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentStyled = styled.div`
  min-width: 600px;
  margin-top: 30px;
  display: inline-block;

  .css-1fjvggn-MuiPaper-root-MuiAccordion-root {
    color: rgb(182, 183, 179);
    background-color: rgb(98, 95, 95);
    border: 4px solid rgb(128, 128, 128);
  }

  .css-pwcg7p-MuiCollapse-root {
    padding: 10px;
    color: rgb(60, 59, 59);
    background-color: rgb(150, 147, 147);
  }

  .MuiAccordionSummary-content {
    margin-left: 10px;
  }

  @media screen and (max-width: 400px) {
    padding: 30px;
    min-width: 0px;
  }
`

export const FooterStyled = styled.footer`
  .MuiPagination-ul {
    margin-top: 20px;
    margin-bottom: 40px;
    justify-content: center;
  }
`
