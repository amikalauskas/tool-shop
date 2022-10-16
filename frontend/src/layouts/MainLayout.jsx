import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => (
 <>
    <Header />
      <Container>
         <Outlet/>
      </Container>
    <Footer />
 </>
);

export default MainLayout;
