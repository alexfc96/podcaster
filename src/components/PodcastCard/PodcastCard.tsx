import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Podcast } from '../../types';
import { Link } from 'react-router-dom';
import './PodcastCard.css';

interface Props {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: Props) => {
  const podcastId = podcast.id.attributes['im:id'];

  return (
    <Link to={`/podcast/${podcastId}`} className="card-link">
      <Card className="card">
        <CardHeader
          className='avatar-container'
          avatar={
            <Avatar
              alt="Podcast"
              src={podcast['im:image'][0].label}
              sx={{
                width: 100,
                height: 100,
                margin: '0 auto',
              }}
            />
          }
        />
        <CardContent className="content">
          <Typography variant="h5" component="div">
            {podcast['im:name'].label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {podcast['im:artist'].label}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PodcastCard;
