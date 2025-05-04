import Box from '@mui/material/Box';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function ProductsPage() {
  return (
    <Box sx={{ pt: 8 }}>
      <Products />
      <Footer />
    </Box>
  );
}