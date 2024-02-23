'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

function SessionProviderClinet({ session, children }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default SessionProviderClinet;
