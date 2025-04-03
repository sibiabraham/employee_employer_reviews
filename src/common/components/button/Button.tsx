import React, { ReactNode } from 'react';

const Button = ({
  children,
  className,
  btnType,
}: {
  children: ReactNode;
  className?: string;
  btnType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
  return (
    <button
      className={`${className} font-manrope bg-dodger-blue w-full rounded-xl px-6 py-3 font-bold text-white uppercase`}
      type={btnType}
    >
      {children}
    </button>
  );
};

export default Button;
