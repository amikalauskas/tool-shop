import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';


const PageRoutes = () => (
  <Routes>
    <Route  element={<MainLayout />}>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/product'>
        <Route path=':id' element={<ProductScreen />} />
      </Route >
    </Route>
  </Routes>
);

export default PageRoutes;
