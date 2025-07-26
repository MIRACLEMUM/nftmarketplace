import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";

import TrandingSection from './components/TrandingSection';
import TopCreatorSection from './components/TopCreatorSection';
import BrowseCategories from "./components/BrowseCategories";
import DiscoverNFTSection from "./components/DiscoverNFTSection"; // adjust the path if needed






import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Ranking from './pages/Ranking';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrandingSection />
      <TopCreatorSection />
      <BrowseCategories />
      <DiscoverNFTSection />





      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}

export default App;
