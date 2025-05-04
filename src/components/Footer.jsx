import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Limelight Communications
            </Typography>
            <Typography variant="body2">
              Accelerating the green transition through sustainable mobility solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info247@limecomms.gq<br />
              <Link href="https://setzweb.com/contact">Send us a message</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links<br />
              <Link href="https://setzweb.com/contact">Contact Us</Link>
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Products</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>Specifications</Link>
            <Link href="#" color="inherit" display="block">Contact</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} Limelight Communications. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}