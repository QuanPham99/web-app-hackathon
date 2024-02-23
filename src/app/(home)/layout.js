import NavBar from '@/components/navigation/NavBar';
import React from 'react';

function layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default layout;
