import './App.css'
import Header from './components/Header/Header'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import PodcastList from './components/PodcastList/PodcastList'

function App() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Header />
      <Routes> 
          <Route path ="/" element= {<PodcastList />}/> 
          {/* <Route path ="/cart" element= {<PodcastInfo />}/>  */}
       </Routes> 
    </Container>
  )
}

export default App
