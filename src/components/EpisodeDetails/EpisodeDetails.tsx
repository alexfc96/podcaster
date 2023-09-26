import { useLocation } from 'react-router-dom';
import './EpisodeDetails.css';
import PodcastCardDetail from '../PodcastCardDetail/PodcastCardDetail';

const EpisodeDetails = () => {
  const location = useLocation();
  const episode = location.state?.episode || null;

  console.log("ep", episode)

  return (
    <div >
      Episode
      {/* {episode && (
        <PodcastCardDetail podcastInfo={episode} />
      )} */}

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
