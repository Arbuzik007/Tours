import './App.css';
import Header from '../header/Header';
import OneBlock from '../one_block/OneBlock';
import TwoBlock from '../two_block/TwoBlock';
import ThreeBlock from '../three_block/ThreeBlock';
import FourBlock from '../four_block/FourBlock';
import FiveBlock from '../five_block/FiveBlock';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <OneBlock />
      <TwoBlock />
      <ThreeBlock />
      <FourBlock />
      <FiveBlock />
      <Footer /> 
    </div>
  );
}

export default App;
