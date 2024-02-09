import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './index.css';

import Navbar from './common/NavBar';
import SourdoughCalculator from './pages/SourdoughCalculator';
import StarterCalculator from './pages/StarterCalculator';
import NotFoundPage from './pages/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='flex flex-col w-screen h-screen bg-bgColor'>
        <Navbar />
        <Routes>
          <Route path='/' element={<SourdoughCalculator />} />
          <Route path='/starter-calculator' element={<StarterCalculator />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
