import React from "react";
import MyImage from '../../assets/images/my-image.jpg';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <h1>Yo! We are testing upload images</h1>
      <img src={MyImage} />

      <div className="app__img">
        <h2>test image background scss</h2>
      </div>
    </div>
  );
}
