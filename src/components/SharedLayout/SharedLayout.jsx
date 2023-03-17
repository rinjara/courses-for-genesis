import { AppBar } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function SharedLayout() {
  return (
    <>
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;
