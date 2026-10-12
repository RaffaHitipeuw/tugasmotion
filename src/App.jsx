import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import HeroSection from './views/hero';
import ServicesSection from './views/services';
import ClientsSection from './views/clients';
import GallerySection from './views/gallery';
import ContactSection from './views/contact';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white'>
      <Navbar />

      <main className='flex-1'>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
