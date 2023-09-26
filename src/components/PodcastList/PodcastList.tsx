import { useEffect, useMemo, useState } from 'react'
import './PodcastList.css';

import { Podcast } from '../../types';
import { TextField, Chip, Box } from '@mui/material';
import PodcastCard from '../PodcastCard/PodcastCard';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [filterPodcast, setFilterPodcast] = useState<string>('')

  const filteredPodcasts = useMemo(() => {
    return filterPodcast != null && filterPodcast.length > 0
      ? podcasts.filter((podcast: Podcast) => {
          const titleMatch = podcast['im:name'].label
            .toLocaleLowerCase()
            .includes(filterPodcast.toLocaleLowerCase());
          const artistMatch = podcast['im:artist'].label
            .toLocaleLowerCase()
            .includes(filterPodcast.toLocaleLowerCase());
          return titleMatch || artistMatch;
        })
      : podcasts;
  }, [podcasts, filterPodcast])

  useEffect(() => {
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
      <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
        <Chip
          label={`${filteredPodcasts.length}`}
          color="primary"
        />  
        <TextField
          style={{marginLeft: '10px'}}
          placeholder='Filter podcast'
          onChange={(e) => {
            setFilterPodcast(e.target.value);
          }}
        />

      </Box>

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
