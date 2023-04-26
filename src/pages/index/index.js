import React from 'react';
import Name from './Name'
import Image from './Image';
import './index.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-mask"/>
      <Name />
      <Image />
    </div>
  );
};

export default Home;
