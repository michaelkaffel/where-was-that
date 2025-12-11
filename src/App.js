import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
      
  );
}

export default App;
