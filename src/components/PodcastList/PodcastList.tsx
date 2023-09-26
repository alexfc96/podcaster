import { useEffect, useMemo, useState } from 'react'
import './PodcastList.css';

import { Podcast } from '../../types';
import { TextField } from '@mui/material';
import PodcastCard from '../PodcastCard/PodcastCard';

const PodcastList = () => {
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
    <>
      <TextField
        placeholder='Filter podcast'
        onChange={(e) => {
          setFilterPodcast(e.target.value);
        }}
        sx={{ marginBottom: 2 }}
      />
      <div className="card-container">
        {filteredPodcasts &&
          filteredPodcasts.map((podcast: Podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
          ))
        }
      </div>
    </>
    
  );
};

export default PodcastList;
