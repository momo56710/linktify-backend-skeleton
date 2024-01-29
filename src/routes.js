import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Investors from './pages/Investors';
import Startups from './pages/Startups';
import Community from './pages/Community';

export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/investors" element={<Investors/>}/>
      <Route path="/startups" element={<Startups/>}/>
      <Route path="/community" element={<Community/>}/>
    </Routes>
  );
}
