import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import VitrineRestaurantes from './page/VitrineRestaurantes';
import AdministracaoRestaurantes from './page/AdministracaoRestaurantes/administracao/AdministracaoRestaurantes';
import FormularioRestaurante from './page/AdministracaoRestaurantes/administracao/FormularioRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormularioRestaurante />} />
      <Route path="/admin/restaurantes/:id" element={<FormularioRestaurante />} />
    </Routes>
  );
}

export default App;
