import { useState } from "react"
import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloIcon from '~/assets/trello.svg'
import {Typography} from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <Box px={2} sx={{
            backgroundColor:'white',
            width: '100%',
            height: '58px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflowX: 'auto',
            bgcolor: (theme) =>(theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
          }}>
            <Box sx={{display:'flex',alignItems: 'center', gap: 2}}>
                <AppsIcon sx={{color:'white'}}/>
                <Box sx={{display:'flex',alignItems: 'center', gap: 0.5}}>
                <img  className='trelloIcon' src={trelloIcon} />
                <Typography sx={{fontSize: '1.2rem', fontWeight:'Bold', color:'white'}}>
                    Trello</Typography>
                </Box>

                <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}>
                <Workspaces/>
                <Recent/>
                <Starred/>
                <Templates/>
                </Box>

                <Button 
                 sx = {{
                    color:'white',
                    border: 'none',
                    '&:hover': {border:'none'}
                 }}
                 variant="outlined" 
                 startIcon={<LibraryAddIcon/>} 
                >Create</Button>
            </Box>

            <Box sx={{display:'flex',alignItems: 'center', gap: 2}}> 
                <TextField 
                    id="outlined-search" 
                    label="Search..." 
                    type="text" 
                    size='small' 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{color: 'white'}} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                            <CloseIcon 
                             fontSize='small'
                             sx={{ color: searchValue ? 'white' : 'transparent', cursor:'pointer' }}
                             onClick = {()=>setSearchValue('')}
                            />
                        )
                    }}
                    sx={{
                        minWidth:'120px',
                        maxWidth: '180px',
                        '& label': {color: 'white'},
                        '& input': {color: 'white'},
                        '& label.Mui-focused': {color: 'white'},
                        '& .MuiOutLineInput-root': {
                            '& field set':{
                                borderColor: 'white'
                            },
                            '&:hover fieldset':{
                                borderColor: 'white'
                            },
                            '&.Mui-focused fieldset':{
                                borderColor: 'white'
                            }
                        }
                    }}
                />

                <ModeSelect/>

                <Tooltip title="Notification" sx={{cursor:'pointer'}}>
                    <Badge color="warning" variant="dot">
                        <NotificationsNoneIcon sx={{color:'white'}}/>
                    </Badge>
                </Tooltip>

                <Tooltip title="Help" sx={{cursor:'pointer', color:'white'}}>
                    <HelpOutlineIcon />
                </Tooltip>

                <Profiles/>
            </Box>
        </Box>
    )
}

export default AppBar