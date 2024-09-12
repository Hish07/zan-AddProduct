import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-add-product">Add Product</button>
      </div>
    </footer>
  );
};

export default Footer;