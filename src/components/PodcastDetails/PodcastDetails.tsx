import { useParams } from 'react-router-dom';
import { usePodcastDetail } from '../../hooks/usePodcastDetail';

import PodcastCardDetail from '../PodcastCardDetail/PodcastCardDetail';
import EpisodesTable from '../EpisodesTable/EpisodesTable';

import { Podcast } from '../../types';
import { Box } from '@mui/material';
import './PodcastDetails.css';

interface Props {
  podcasts: Podcast[];
}

const PodcastDetails = ({podcasts}: Props) => {
  const { podcastId } = useParams();
  const { podcastDetail} = usePodcastDetail(podcastId);
  
  const podcastInfo = podcasts.find(p => p.id.attributes['im:id'] === podcastId) || null;

  return (
    <div className="podcast-details">
      {podcastInfo && 
        <PodcastCardDetail podcastInfo={podcastInfo} />
      }
      
      {podcastDetail && podcastDetail.length > 0 && (
        <div className="episodes">
          <Box
            sx={{
              boxShadow: 7,
              width: '100%',
              p: 1,
              marginBottom: '1rem',
            }}
          >
            Episodes: {podcastDetail[0].trackCount }
          </Box>
          
          {podcastInfo && 
            <Box
              sx={{
                boxShadow: 7,
                width: '100%',
                p: 1,
              }}
            >
              <EpisodesTable episodes={podcastDetail.slice(1)} />
            </Box>
          }
        </div> 
      )}
    </div>
  );
};

export default PodcastDetails;
