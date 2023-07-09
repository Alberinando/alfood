import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import VitrineRestaurantes from './page/VitrineRestaurantes';
import AdministracaoRestaurantes from './page/AdministracaoRestaurantes/administracao/AdministracaoRestaurantes';
import FormularioRestaurante from './page/AdministracaoRestaurantes/administracao/FormularioRestaurante';
import PaginaBaseAdmin from './page/AdministracaoRestaurantes/PaginaBaseAdmin';
import AdministracaoPratos from './page/AdministracaoRestaurantes/Pratos/AdministracaoPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin' element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />
        <Route path="pratos" element={ <AdministracaoPratos/>} />
      </Route>
    </Routes>
  );
}

export default App;
