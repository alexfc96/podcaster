import { Card, CardContent, Typography } from '@mui/material';
import { Podcast } from '../../types';

interface Props {
    podcast: Podcast
}

const PodcastCard = ({ podcast }: Props) => {
  return (
    <Card>
      <img src={podcast['im:image'][1].label} alt="Podcast" className="card-image" />
      <CardContent>
        <Typography variant="h5" component="div">
          {podcast.title.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {podcast['im:artist'].label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
