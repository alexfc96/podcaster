import './App.css'
import Header from './components/Header/Header'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import PodcastList from './components/PodcastList/PodcastList'
import PodcastDetails from './components/PodcastDetails/PodcastDetails'

function App() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Header />
      <Routes> 
          <Route path ="/" element= {<PodcastList />}/> 
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
       </Routes> 
    </Container>
  )
}

export default App
