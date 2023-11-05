import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/files/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;