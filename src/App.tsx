import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [podcasts, setPodcasts] = useState([])

  useEffect(() =>{
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(async response => await response.json())
      .then(res => {
        setPodcasts(res.entry)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Podcaster</h1>
    </>
  )
}

export default App
