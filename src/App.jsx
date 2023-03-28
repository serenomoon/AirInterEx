import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import './App.css';

export const App = () => {
  

  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}
