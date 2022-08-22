import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './pages/Cardapio';
import Inicio from './pages/Inicio';
import Menu from 'components/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
