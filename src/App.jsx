import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Ranking from './pages/Ranking';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <Navbar />
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
