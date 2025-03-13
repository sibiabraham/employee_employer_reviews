import { IconProps } from './types';

export default function HamburgerIcon({
  color = 'currentColor',
  className = '',
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill={color}
      className={className}
      {...rest}
    >
      <rect width='24' height='24' fill='transparent' />
      <line
        x1='6'
        y1='7'
        x2='18'
        y2='7'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        x1='6'
        y1='12'
        x2='18'
        y2='12'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        x1='6'
        y1='17'
        x2='18'
        y2='17'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}
