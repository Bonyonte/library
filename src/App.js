import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/comment" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
