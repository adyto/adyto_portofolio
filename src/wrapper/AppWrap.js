import React from 'react';
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`w-full min-h-screen flex flex-row ${className}`}
      >
        <span className="lg:p-7" />
        <Component />
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
