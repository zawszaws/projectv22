import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Specifications from '../components/Specifications';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Specifications />
      <Footer />
    </>
  );
}