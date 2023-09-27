import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './PodcastCardDetail.css';
import { Podcast } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  podcastInfo: Podcast;
}
const PodcastCardDetail = ({ podcastInfo }: Props) => {
  const podcastId = podcastInfo.id.attributes['im:id'];

  return (
    <div className="podcast-details">
      {podcastInfo && (
        <Card className={`detail-card fixed-card'}`}>
          <Link to={`/podcast/${podcastId}`}>
            <CardMedia
              component="img"
              alt="Podcast"
              height="140"
              src={podcastInfo['im:image'][2].label}
              className="card-image" />
          </Link>
          <CardContent>
              <hr className="separator" />
              <Link to={`/podcast/${podcastId}`}>
                <Typography variant="h5" component="div" className="podcast-title">
                  {podcastInfo['im:name'].label}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="artist">
                  By {podcastInfo['im:artist'].label}
                </Typography>
              </Link>
              <hr className="separator" />
              <Typography variant="body2" color="text.secondary" className="description-label">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary" className="description">
                {podcastInfo.summary.label}
              </Typography>
            </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PodcastCardDetail;
