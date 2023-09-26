import { useLocation } from 'react-router-dom';
import './EpisodeDetails.css';
import PodcastCardDetail from '../PodcastCardDetail/PodcastCardDetail';

const EpisodeDetails = () => {
  const location = useLocation();
  const episode = location.state?.episode || null;
  const podcast = location.state?.podcastInfo || null;

  console.log("ep", episode)

  return (
    <div className="episode-details">
      {episode && (
        <PodcastCardDetail podcastInfo={podcast} />
      )}

      {/* {podcast.length > 0 && (
        <div className="episodes">
          <Box
            style={{display: 'flex'}}
            sx={{
              boxShadow: 7,
              width: '100%',
              p: 1,
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
            <EpisodesTable episodes={podcast.slice(1)} />
          </Box>
        </div> 
      )} */}
    </div>
  );
};

export default EpisodeDetails;
