import React from 'react';

const BackDrop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className='fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden'
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
