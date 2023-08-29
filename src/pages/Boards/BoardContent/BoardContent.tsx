import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { BoardType, ColumnData } from '../../../apis/mock-data'
import {mapOrder} from '../../../utils/sorts'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
// import { arrayMove } from '@dnd-kit/sortable'


interface BoardContentProps {
  board: BoardType;
}

function BoardContent({ board }: BoardContentProps) {
  const [orderedColumnsState, setOrderedColumnsState] = useState<ColumnData[]>([])

  useEffect(()=> {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  },[board])

  const handleDragEnd = (event: DragEndEvent) =>{
    console.log('handleDragEnd: ' , event)
    // const { active, over }= event
    
    // if(over && active.id !== over.id){
    //     const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id) 

    //     const newIndex = orderedColumnsState.findIndex(c => c._id === over.id) 

    //     const dndOrderedColumns = arrayMove(orderedColumnsState,oldIndex,newIndex)
      
    //     const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

    //     console.log('dndOrderedColumns: ', dndOrderedColumns)
    //     console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)

    //     setOrderedColumnsState(dndOrderedColumns)
    //   }
  }
  
  return (
    
    <DndContext onDragEnd={handleDragEnd}>
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: 'calc(100vh - 58px - 48px)',
        display: 'flex',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        overflowX: 'auto',
        overflowY: 'hidden',
        p: '10px 0',
      }}
    >
      
      <ListColumns columns={orderedColumnsState} />
      
    </Box>
    </DndContext>
    
  )
}

export default BoardContent;
