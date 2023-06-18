import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import VitrineRestaurantes from './page/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
    </Routes>
  );
}

export default App;
