import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Footer from './components/Footer';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AddProduct />
        <Footer />
      </div>
    </div>
  );
}

export default App;