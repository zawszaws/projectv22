import Box from '@mui/material/Box';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <Box sx={{ pt: 8 }}>
      <About />
      <Footer />
    </Box>
  );
}