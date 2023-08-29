import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnData } from '../../../../apis/mock-data' 

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Column from './Column/ColumnComponent'

interface ListColumnsProps {
  columns: ColumnData[];
}

function ListColumns({ columns }: ListColumnsProps) {
  return (
    <SortableContext items={columns.map((c) => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 },
        }}
      >
        {columns.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        {/* Box Add new column CTA */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d',
          }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1,
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumns
