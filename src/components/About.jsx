import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Our Mission
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                At Limelight Communications, we're dedicated to accelerating the global transition to sustainable transportation. Our focus is on bringing cutting-edge electric motorbikes to markets where we can establish a personal presence.
              </Typography>
              <Typography variant="body1">
                We believe that everyone deserves access to great technology powered by clean energy. Through our international trading network, we're making this vision a reality.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
              src="https://247store.gq/wp-content/uploads/2025/04/bike3.png"
              alt="Electric motorcycle charging"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}