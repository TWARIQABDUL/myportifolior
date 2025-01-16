import React from 'react';
// import HeroText from './HeroText';
import CodesContainer from './CodesContainer';

function HeroCard(): React.ReactElement {
  return (
    <div
      className='
        b-gray-900
        p-4
        shadow-sm
        flex
        w-full
        justify-between
        bg-hero-pattern
      '
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <CodesContainer />
    </div>
  );
}

export default HeroCard;
