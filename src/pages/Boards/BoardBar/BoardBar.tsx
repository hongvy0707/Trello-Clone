import { Chip, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { capitalizeFirstLetter } from '../../../utils/formatter'
import { BoardType } from '../../../apis/mock-data'

interface BoardContentProps {
  board: BoardType;
}

const MENU_STYLES ={
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover':{
     bgcolor: 'primary.50'
  }
}

function BoardBar({ board }: BoardContentProps) {
    return(
        <Box px={2} sx={{
          background:'white',
          width: '100%',
          height: '60px',
          display: 'flex',
          lignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          paddingX: 2,
          overflowX: 'auto',
          bgcolor: (theme) =>(theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')

        }}>
          <Box sx={{display:'flex',alignItems: 'center', gap: 2}}>
            <Chip 
              sx={MENU_STYLES}
              icon={<DashboardIcon/>} 
              label={board?.title}
              clickable  
            />

            <Chip 
              sx={MENU_STYLES}
              icon={<VpnLockIcon/>} 
              label={capitalizeFirstLetter(board?.type)}
              clickable  
            />

            <Chip
              sx={MENU_STYLES}
              icon={<AddToDriveIcon/>} 
              label='Add to Google Drive'
              clickable  
            />

            <Chip
              sx={MENU_STYLES}
              icon={<BoltIcon/>} 
              label='Automation'
              clickable  
            />

            <Chip
              sx={MENU_STYLES}
              icon={<FilterListIcon/>} 
              label='Filter'
              clickable  
            />
          </Box>

          <Box sx={{display:'flex',alignItems: 'center', gap: 2}}>
          <Button 
            sx = {{
              color:'white',
              borderColor: 'white',
              '&:hover': {
                borderColor:'white'
              }
            }}
            variant="outlined" 
            startIcon={<PersonAddIcon/>}
            >
              Invite
          </Button>
          <AvatarGroup max={2}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root':{
              width:34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {bgcolor:'#a4b0be'}
            }
          }}>
            <Tooltip title='CHV'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title='CHV'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title='CHV'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </AvatarGroup>
          </Box>
        </Box>
    )
}

export default BoardBar