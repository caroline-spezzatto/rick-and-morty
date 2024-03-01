import { Box, AccordionSummary, Accordion as MuiAccordion } from '@mui/material'
import { ArrowForwardIosSharp } from '@mui/icons-material'
import { AccordionProps } from './interface'

export const Accordion = ({ children, content, id }: AccordionProps) => {
  return (
    <MuiAccordion square elevation={0} disableGutters>
      <AccordionSummary
        id={id}
        expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '1.2rem' }} />}
      >
        <Box key={id} textAlign="left">
          {content}
        </Box>
      </AccordionSummary>
      {children}
    </MuiAccordion>
  )
}
