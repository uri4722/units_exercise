import { Route, Routes } from 'react-router-dom';
import './App.css';
import Files from './pages/Files';
import NoPage from './pages/NoPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Files />} />
        <Route path="/files/*" element={<Files />} />
        <Route path="/file/*" element={<Files />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/not-found" element={<NoPage />} />




      </Routes>
    </div>
  );
}

export default App;