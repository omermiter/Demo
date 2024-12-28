import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import Plans from './components/plans';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Plans />
    </div>
  );
}

export default App;
