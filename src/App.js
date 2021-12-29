import './App.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Card from "./components/Card/Card";


function App() {

  return (
    <div className='App'>
      <div>
      <Header />
      </div>
      <div>
      <HeroSection />
      </div>
      <div>
      <Card />
    </div>
    </div>
  );
}

export default App;
