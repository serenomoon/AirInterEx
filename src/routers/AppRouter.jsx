import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { SignIn } from '../components/login/SignIn';
import { Baggage } from '../components/Plan/baggage/Baggage';
import { Destination } from '../components/Plan/destination/Destination';
import { DestinyPlace } from '../components/Plan/destination/DestinyPlace';
import { PlaceInfo } from '../components/Plan/destination/placeinfo/PlaceInfo';
import { ArriNDep } from '../components/Plan/flightinfo/arrindep/ArriNDep';
import { FlightInfo } from '../components/Plan/flightinfo/FlightInfo';
import { Plan } from '../components/Plan/Plan';
import { TripIdeas } from '../components/Plan/tripideas/TripIdeas';

export const AppRouter = () => {
  return (
    <Routes>
        <>
            <Route path='/' element={ <Home /> }/>
            
            <Route path='signin' element={ <SignIn /> }/>


            {/* PLAN */}
            <Route path='plan' element={ <Plan /> }/>

            <Route path='plan/destination' element={ <Destination /> }/>
            {/* <Route path='plan/destination/:id' element={ <Destination /> }/> */}
            <Route path='plan/destination/destinyplace' element={ <DestinyPlace /> }/>
            <Route path='plan/destination/destinyplace/placeinfo' element={ <PlaceInfo /> }/>

            <Route path='plan/trip-ideas' element={ <TripIdeas /> }/>

            <Route path='plan/baggage' element={ <Baggage /> }/>

            <Route path='plan/flight-information' element={ <FlightInfo /> }/>
            <Route path='plan/flight-information/arrivals-and-departures' element={ <ArriNDep /> }/>

            <Route path='plan/travel-requirements' element={ <Destination /> }/>

            <Route path='plan/travel-where-we-fly' element={ <Destination /> }/>
            
            <Route path='plan/travel-corporate-travel' element={ <Destination /> }/>
        </>
    </Routes>
  )
}
