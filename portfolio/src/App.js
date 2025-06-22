import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Body />
      <About />
    </div>
  );
}

export default App;