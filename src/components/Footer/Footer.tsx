import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="ml-2 mr-auto flex items-center justify-between border-t border-gray-300 pt-5 pb-1">
        <p>&copy; 2021 All rights reserved</p>
        <ul>
          <li className="inline-block ml-5">Terms of services</li>
          <li className="inline-block ml-5">Privacy policy</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
