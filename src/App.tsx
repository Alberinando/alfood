import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import VitrineRestaurantes from './page/VitrineRestaurantes';
import AdministracaoRestaurantes from './page/AdministracaoRestaurantes/administração/AdministracaoRestaurantes';
import FormularioRestaurante from './page/AdministracaoRestaurantes/administração/FormularioRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurante />} />
    </Routes>
  );
}

export default App;
