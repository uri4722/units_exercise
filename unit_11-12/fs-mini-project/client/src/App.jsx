import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
      
        <Route path="/files/:id" element={<Home />} />
        <Route path="/files" element={<Home />} />
        <Route index element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;