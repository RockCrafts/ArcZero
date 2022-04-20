import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import NavbarTop from './NavbarTop';
import Players from './Players';
import Teams from './Teams';
// import { Nav } from 'react-bootstrap';
function App() {
  return (
    <div>
      <NavbarTop />
      <BrowserRouter>
        <Routes>
          <Route path='/teams' element={<Teams />} />
          <Route path='/players' element={<Players />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
