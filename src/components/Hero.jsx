import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("https://247store.gq/wp-content/uploads/2025/04/bike1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        },
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            mb: 4,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }
          }}
        >
          Accelerating the Green Transition
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
          }}
        >
          Bringing sustainable mobility solutions to markets worldwide
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          onClick={() => navigate('/products')}
        >
          Discover Our Services
        </Button>
      </Container>
    </Box>
  );
}