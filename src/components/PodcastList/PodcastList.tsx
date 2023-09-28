import { useMemo, useState } from 'react'
import './PodcastList.css';

import { Podcast } from '../../types';
import { TextField, Chip, Box } from '@mui/material';
import PodcastCard from '../PodcastCard/PodcastCard';

interface Props {
  podcasts: Podcast[];
}

const PodcastList = ({podcasts}: Props) => {
  const [filterPodcast, setFilterPodcast] = useState<string>('')

  const filteredPodcasts = useMemo(() => {
    return filterPodcast
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

  return (
    <>
      {podcasts.length > 0 && 
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
      }

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
