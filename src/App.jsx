import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Movie } from './Routes';
import { ContextProvider } from './utils/global.context';

export const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/home" element={ <Home /> }/>
        <Route path="movie/:id" element={ <Movie /> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>
      </Routes>
    </ContextProvider>
  )
}
