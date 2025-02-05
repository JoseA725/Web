/* File name: services.css */
/* Student’s Name: José Andrés Lozano Alanís */
/* StudentID: 301498458 */
/* Date: 4/February/2025 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import Layout from '../components/Layout';

const App = () => {
  return (
    <Router>
      <Layout />
      <MainRouter />
    </Router>
  );
};
  
export default App;
