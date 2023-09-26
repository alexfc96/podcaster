import { useLocation } from 'react-router-dom';
import './EpisodeDetails.css';
import PodcastCardDetail from '../PodcastCardDetail/PodcastCardDetail';
import { Box, Typography } from '@mui/material';

const EpisodeDetails = () => {
  const location = useLocation();
  const episode = location.state?.episode || null;
  const podcast = location.state?.podcastInfo || null;

  console.log("ep", episode)

  return (
    <div className="episode-details">
      {podcast && (
        <PodcastCardDetail podcastInfo={podcast} />
      )}

      {episode && (
        <div className="episode-description-card">
          <Box
            sx={{
              boxShadow: 7,
              width: '100%',
              p: 1,
            }}
          >
            {episode.trackName}

            <Typography variant="body2" color="text.secondary" className="episode-description">
              {episode.description}
            </Typography>

            <div className='audio-control'>
              <audio controls>
                <source src={episode.episodeUrl} type="audio/mpeg" />
              </audio>
            </div>
          </Box>
        </div> 
      )}
    </div>
  );
};

export default EpisodeDetails;
