import { Autocomplete as AutocompleteMui, TextField } from '@mui/material'
import { AutocompleteProps } from './interface'

export const Autocomplete = ({ label, options, onChange }: AutocompleteProps) => {
  return (
    <AutocompleteMui
      disablePortal
      id="combo-box"
      options={options}
      onChange={onChange}
      filterOptions={options => options}
      renderInput={params => <TextField {...params} label={label} />}
    />
  )
}
