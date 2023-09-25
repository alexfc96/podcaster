import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PodcastCard from './components/PodcastCard/PodcastCard'
import { Podcast } from './types'

function App() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])

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
    <>
      <Header />
      <div className="card-container">
        {podcasts &&
          podcasts.map((podcast: Podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
            ))
        }
      </div>
    </>
  )
}

export default App
