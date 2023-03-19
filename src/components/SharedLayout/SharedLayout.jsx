import { AppBar } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Loader from '../../components/Loader/Loader';

function SharedLayout() {
  return (
    <>
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;
