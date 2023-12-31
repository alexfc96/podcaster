import Header from './components/Header/Header'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import PodcastList from './components/PodcastList/PodcastList'
import PodcastDetails from './components/PodcastDetails/PodcastDetails'
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails'
import { usePodcastList } from './hooks/usePodcastList'

function App() {
  const { isLoadingPodcasts, podcasts } = usePodcastList();

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Header isLoading={isLoadingPodcasts} />
      <Routes>
        <Route path="/" element={<PodcastList podcasts={podcasts} />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails podcasts={podcasts} />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails podcasts={podcasts} />} />
      </Routes>
    </Container>
  )
}

export default App
