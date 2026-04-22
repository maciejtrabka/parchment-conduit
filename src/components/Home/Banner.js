import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Soft light. Clear words. A warm place to read and write.</p>
        <p className="banner-lede">
          Browse the community feed, follow writers you like, and save pieces to favorites when you are signed in.
        </p>
      </div>
    </div>
  );
};

export default Banner;
