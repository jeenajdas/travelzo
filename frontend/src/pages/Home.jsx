import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import PopularRoutes from '../components/home/PopularRoutes';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchData) => {
    // Pass search data to SearchResults page
    navigate('/search', { state: searchData });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      
      {/* Spacer for floating search form */}
      <div className="h-32 md:h-40"></div>
      
      <PopularRoutes />
      <WhyChooseUs />
      <Features />
      <Testimonials />
    </div>
  );
}