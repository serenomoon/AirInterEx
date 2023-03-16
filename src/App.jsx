import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import './App.css';

export const App = () => {
  

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
