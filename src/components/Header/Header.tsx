import Typography from '@mui/material/Typography';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="link">
        <Typography variant="h5" className="title">
          Podcaster
        </Typography>
      </a>
    </header>
  );
};

export default Header;