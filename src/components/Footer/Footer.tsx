import React from 'react';
import './Footer.css';
type FooterProps = {
  resultsCount: number;
};
const Footer = ({ resultsCount }: FooterProps) => {
  return (
    <div className="footer">
      <div>Results {resultsCount} </div>
    </div>
  );
};

export default Footer;
