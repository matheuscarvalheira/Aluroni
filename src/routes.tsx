import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './pages/Cardapio';
import Inicio from './pages/Inicio';
import Menu from 'components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';
import GlobalStyles from './styles/global';


export default function AppRouter() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light );
  };
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <main className="container">
        <Router>
          <Menu toggleTheme={toggleTheme}/>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </ThemeProvider>
  );
}
