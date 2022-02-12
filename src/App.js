import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <Features />
      <FAQ />
    </>
  );
}

export default App;
