import { Container } from '@mui/material'
import AppBar from '../../components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '../../apis/mock-data'

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx ={{height:'100vh', backgroundColor: 'primary.main'}}>
          <AppBar/>
          <BoardBar board ={mockData} />
          <BoardContent board ={mockData}/>
        </Container>
      )
}

export default Board