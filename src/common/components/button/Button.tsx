import React, { ReactNode } from 'react';

const Button = ({
  onClick,
  children,
  className,
}: {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
