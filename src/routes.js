import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Investors from './Investors';
import Startups from './Startups';
import Community from './Community';

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
