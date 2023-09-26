import Typography from '@mui/material/Typography';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-title">
      <Link to={`/`} className="link">
        <Typography variant="h5" className="title">
          Podcaster
        </Typography>
      </Link>
    </header>
  );
};

export default Header;