import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PodcastCard from './components/PodcastCard/PodcastCard'
import { Podcast } from './types'
import { Container, TextField } from '@mui/material'

function App() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [filterPodcast, setFilterPodcast] = useState<string>('')

  const filteredPodcasts = useMemo(() => {
    return filterPodcast != null && filterPodcast.length > 0
    ? podcasts.filter(podcast => {
        return podcast['im:name'].label.toLocaleLowerCase().includes(filterPodcast.toLocaleLowerCase())
      })
    : podcasts
  }, [podcasts, filterPodcast]) 

  useEffect(() =>{
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(async response => await response.json())
      .then(res => {
        setPodcasts(res.feed.entry)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <Header />
      <TextField
        placeholder='Filter podcast'
        onChange={(e) => {
          setFilterPodcast(e.target.value);
        }}
        sx={{ marginBottom: 2 }} // Espacio entre el campo de búsqueda y las tarjetas
      />
      <div className="card-container">
        {filteredPodcasts &&
          filteredPodcasts.map((podcast: Podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
          ))
        }
      </div>
    </Container>
  )
}

export default App
