import Game from './Game';
import './App.css';
import { FrontPage } from './FrontPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="" element={<FrontPage/>} exact/>
          <Route path='/Games' element={<Game/>} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
