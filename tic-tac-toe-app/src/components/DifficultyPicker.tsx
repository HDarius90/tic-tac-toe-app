import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DifficultyPickerProps } from '../interface';

export const DifficultyPicker: React.FC<DifficultyPickerProps> = ({
  difficulty,
  setDifficulty,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };

  return (
    <Box
      sx={{
        maxWidth: 120,
        mb: 2,
        '& .MuiInputBase-input': { color: '#9e9e9e' },
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel sx={{ color: '#9e9e9e' }} id="demo-simple-select-label">
          Nehézség
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Difficulity"
          onChange={handleChange}
        >
          <MenuItem value={'Easy'}>Könnyű</MenuItem>
          <MenuItem value={'Medium'}>Közepes</MenuItem>
          <MenuItem value={'Hard'}>Verhetetlen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
