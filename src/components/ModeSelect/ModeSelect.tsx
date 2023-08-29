import {
  useColorScheme,
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
    const {mode, setMode} = useColorScheme()
    const handleChange = (event: SelectChangeEvent) => {
      const selectedMode = event.target.value
      setMode (selectedMode as any);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel 
          id="demo-select-small-label"
          sx= {{
            color:'white',
            '&.Mui-focused': {color: 'white'}
          }}
        >
          Mode
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': {borderColor:'white'},
            '&:hover .MuiOutlinedInput-notchedOutline': {borderColor:'white'},
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor:'white'},
            '.MuiSvgIcon-root': {color: 'white'}
          }}
        >
          <MenuItem value='light'>
            <Box sx={{display:'flex', alignItems:'center', gap: '8px'}}>
            <LightModeIcon fontSize='small'/> Light
            </Box>
          </MenuItem>
          <MenuItem value='dark'>
            <Box sx={{display:'flex', alignItems:'center', gap: '8px'}}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
            </Box>
          </MenuItem>
          <MenuItem value='system'>
            <Box sx={{display:'flex', alignItems:'center', gap: '8px'}}>
            <SettingsBrightnessIcon fontSize='small'/> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    );
  }

export default ModeSelect