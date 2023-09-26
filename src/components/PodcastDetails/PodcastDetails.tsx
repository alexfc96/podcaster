import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastList } from '../../hooks/usePodcasList';

import PodcastCardDetail from '../PodcastCardDetail/PodcastCardDetail';
import EpisodesTable from '../EpisodesTable/EpisodesTable';

import { PodcastDetail } from '../../types';
import { Box } from '@mui/material';
import './PodcastDetails.css';

const PodcastDetails = () => {
  const { podcasts } = usePodcastList();
  const { podcastId } = useParams();

  const [podcast, setPodcast] = useState<PodcastDetail[]>([])
  const podcastInfo = podcasts.find(p => p.id.attributes['im:id'] === podcastId) || null;

  useEffect(() =>{
    fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
      .then(async response => await response.json())
      .then(res => {
        setPodcast(res.results);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log("po", podcast)

  return (
    <div className="podcast-details">
      <PodcastCardDetail podcastInfo={podcastInfo} />
      
      {podcast.length > 0 && (
        <div className="episodes">
          <Box
            sx={{
              boxShadow: 7,
              width: '100%',
              p: 1,
              marginBottom: '1rem',
            }}
          >
            Episodes: {podcast[0].trackCount }
          </Box>
          
          <Box
            sx={{
              boxShadow: 7,
              width: '100%',
              p: 1,
            }}
          >
            <EpisodesTable episodes={podcast.slice(1)} podcastInfo={podcastInfo} />
          </Box>
        </div> 
      )}
    </div>
  );
};

export default PodcastDetails;
