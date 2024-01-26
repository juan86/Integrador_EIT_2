import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Movie } from './Routes';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/home" element={ <Home /> }/>
          <Route path="movie/:id" element={ <Movie /> }/>
          <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>
      </Router>
    </>
  )
}
