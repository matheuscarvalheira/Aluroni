import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lazy, useState, Suspense } from 'react';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';
import GlobalStyles from './styles/global';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main className="container">
        <Router>
          <Menu toggleTheme={toggleTheme} />
          <Suspense fallback={<p> Carregando...</p>}>
            <Routes>
              <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<Inicio />} />
                <Route path="cardapio" element={<Cardapio />} />
                <Route path="sobre" element={<Sobre />} />
              </Route>
              <Route path="prato/:id" element={<Prato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </main>
    </ThemeProvider>
  );
}
