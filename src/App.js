import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './compenent/index';
import { HomePage, ErrorPage, SchoolDetails, SchoolPage, LoginPage } from './pages/index';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='schools' element={<SchoolPage />} />
          <Route path='school/:id' element={<SchoolDetails />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};


export default App;