import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Destination } from '../components/Plan/destination/Destination';
import { Plan } from '../components/Plan/Plan';

export const AppRouter = () => {
  return (
    <Routes>
        <>
            <Route path='/' element={ <Home /> }/>

            <Route path='plan' element={ <Plan /> }/>
            <Route path='destination' element={ <Destination /> }/>
        </>
    </Routes>
  )
}
