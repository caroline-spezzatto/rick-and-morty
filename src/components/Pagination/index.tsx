import { Pagination as PaginationMui, Stack } from '@mui/material'
import { PaginationProps } from './interface'

export const Pagination = ({ count, onChange, page }: PaginationProps) => {
  return (
    <Stack>
      <PaginationMui count={count} page={page} onChange={onChange} variant="outlined" />
    </Stack>
  )
}
