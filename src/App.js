import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Default from './paginas/Default';
import Inicio from './paginas/Inicio/Inicio';
import Produto from './paginas/Produtos';
import Sobre from './paginas/Sobre/Sobre';
import ItemPage from './paginas/ItemPage';
import Downloads from './paginas/Downloads/Index';
import Contatos from './paginas/Contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projeto-frontend-II/' element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/itemPagina/:id" element={<ItemPage />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path="*" element={<Default />} />
        <Route path="/contato" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
