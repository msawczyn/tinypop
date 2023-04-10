import React from 'react';


const Footer = () => {
   const year = new Date().getFullYear();

   return <footer>{`Copyright (c) TinyPop ${year}`}</footer>;
}

export default Footer;
