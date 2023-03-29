import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import './App.css';
import { ScrollToTop } from './helpers/ScrollToTop';

export const App = () => {
  

  return (
    <HashRouter>
      <ScrollToTop />
      <AppRouter />
    </HashRouter>
  )
}
