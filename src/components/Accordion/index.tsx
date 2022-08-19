import {
  styled,
  AccordionSummary,
  Accordion as MuiAccordion,
  AccordionProps as AccordionPropsMui
} from '@mui/material'
import { ArrowForwardIosSharp } from '@mui/icons-material'
import { AccordionProps } from './interface'
import { ContentStyled } from './styles'

const AccordionMui = styled((props: AccordionPropsMui) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

export const Accordion = ({ children, content, id }: AccordionProps) => {
  return (
    <AccordionMui>
      <AccordionSummary
        id={id}
        expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '1.2rem' }} />}
      >
        <ContentStyled key={id}>{content}</ContentStyled>
      </AccordionSummary>
      {children}
    </AccordionMui>
  )
}
