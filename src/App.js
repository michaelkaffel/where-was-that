import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Home from './pages/HomePage';
import AddLocationsPage from './pages/AddLocationsPage';
import HikingTrails from './pages/HikingTrails';
import CampingSpots from './pages/CampingSpots';
import ScenicOverlooks from './pages/ScenicOverlooks';
import './App.css';

function App() {
  return (
    <>
      
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='add-locations' element={<AddLocationsPage/>}/>
        <Route path='hiking-trails' element={<HikingTrails />}/>
        <Route path='camping-spots' element={<CampingSpots />}/>
        <Route path='scenic-overlooks' element={<ScenicOverlooks />}/>
      </Routes>
    </>
      
  );
}

export default App;
