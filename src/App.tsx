import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

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
      <Header />
    </>
  )
}

export default App
