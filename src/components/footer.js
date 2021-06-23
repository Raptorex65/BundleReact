import React from "react";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Bundle </span>
      </h5>
      <h5>All rights reserved</h5>
  </footer>
);

export default Footer;
