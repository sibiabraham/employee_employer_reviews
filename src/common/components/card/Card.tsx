import React, { ReactNode } from 'react';

type PageLayoutQueryProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: PageLayoutQueryProps) => {
  return (
    <div
      className={`box-content rounded-[62px] bg-white text-black ${className}`}
    >
      <div className='relative p-4'>{children}</div>
    </div>
  );
};

export default Card;
