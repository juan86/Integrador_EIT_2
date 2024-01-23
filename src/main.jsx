import React from 'react'
import ReactDOM from 'react-dom/client'
import { MovieDatabases } from '../src/components/MovieDatabases'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieDatabases />
  </React.StrictMode>,
)
