import { Dispatch, SetStateAction } from 'react';
// material ui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
};

const MySelect = ({ city, setCity }: SelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={'Buenos Aires'}>Buenos Aires</MenuItem>
          <MenuItem value={'Montevideo'}>Montevideo</MenuItem>
          <MenuItem value={'Santiago'}>Santiago</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default MySelect;
