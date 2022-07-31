import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './compenent/index';
import { AddUsers, Statistic, SharedLayout } from './pages/Dashborad/index';
import { HomePage, ErrorPage, SchoolDetails, SchoolPage, LoginPage, PrivateRoute } from './pages/index';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='school' element={<SchoolPage />} />
          <Route path='school/:id' element={<SchoolDetails />} />
          <Route path='login' element={<LoginPage />} />

          <Route path='dashboard' element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
          >

            <Route path='addUser' element={<AddUsers />} />
            <Route index path='stats' element={<Statistic />} />

          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};


export default App;