/* Main needs for REACT */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

/* Pages */
import MyFirstPage from './../pages/MyFirstPage';
import MyInitialPage from './../pages/MyInitialPage';

const RouteList = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyInitialPage />} />
        <Route path="/first" element={<MyFirstPage />} />
        <Route path="*" element={<MyInitialPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
