import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavbarTop from './NavbarTop';
import Players from './Players';
import Teams from './Teams';
import Team from './Team';
import { useEffect, useState } from 'react';
import { ping } from './API';
import Offline from './Offline';
import Player from './Player';
import LoadingSpinner from './Components/LoadingSpinner';
import League from './League';
// import { Nav } from 'react-bootstrap';
function App() {
  const [serverOnline, setServerOnline] = useState(undefined);
  useEffect(() => {
    try {
      ping().then((status) => setServerOnline(status));
    } catch {
      setServerOnline(false);
    }
    console.log(ping());
  }, []);

  return (
    <div>
      <NavbarTop />
      <BrowserRouter>
        {serverOnline !== undefined ? (
          <Routes>
            {serverOnline ? (
              <>
                <Route path='/league/:id' element={<League />} />
                <Route path='/players/:id' element={<Player />} />
                <Route path='/teams/:id' element={<Team />} />
                <Route path='/teams' element={<Teams />} />
                <Route path='/players' element={<Players />} />
                <Route path='/' element={<Home />} />
              </>
            ) : (
              <Route path='*' element={<Offline />}></Route>
            )}
          </Routes>
        ) : (
          <LoadingSpinner />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
