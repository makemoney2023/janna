import React from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/landing-page'));

export default function Home() {
  return <LandingPage />;
}
