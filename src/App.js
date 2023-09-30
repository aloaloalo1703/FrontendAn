import logo from './logo.svg';
import './App.css';
import Converter from './Components/Converter/Converter';
import Buoi14 from './Components/Buoi14/Buoi14';

function App() {
  return (
    <div className='App'>
      <div className='converter'>
        <Buoi14 />
      </div>
    </div>
  );
}

export default App;
