import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`© ${year} Luis A.`}</footer>;
};

export default Footer;