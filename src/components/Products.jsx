import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const products = [
  {
    id: 1,
    name: "LiveWire One",
    description: "The premium electric motorcycle experience with power and style",
    image: "https://247store.gq/wp-content/uploads/2025/04/bike1.png"
  },
  {
    id: 2,
    name: "LiveWire S2 Del Mar",
    description: "Urban adventure motorcycle with cutting-edge technology",
    image: "https://247store.gq/wp-content/uploads/2025/04/bike3.png"
  },
  {
    id: 3,
    name: "LiveWire S3",
    description: "The future of electric motorcycles, available today",
    image: "https://247store.gq/wp-content/uploads/2025/04/bike2.png"
  }
];

export default function Products() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Our Electric Motorcycles
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                    height: { xs: '200px', sm: '250px', md: '300px' }
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}