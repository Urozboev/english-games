import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/header/Home';
import Footer from './pages/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ErrorPage from './pages/error/ErrorPage';
import Game from './pages/games/Game';
AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:contentName" element={<Game />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
