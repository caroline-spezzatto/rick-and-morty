import { Pagination as PaginationMui, Stack } from '@mui/material'
import { PaginationProps } from './interface'

export const Pagination = ({ count, onChange }: PaginationProps) => {
  return (
    <Stack>
      <PaginationMui count={count} onChange={onChange} variant="outlined" />
    </Stack>
  )
}
