import { IconProps } from './types';

export default function CrossIcon({
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
      <rect width='24' height='24' fill='#007DFC' />
      <line x1='6' y1='6' x2='18' y2='18' stroke={color} strokeWidth='2' />
      <line x1='6' y1='18' x2='18' y2='6' stroke={color} strokeWidth='2' />
    </svg>
  );
}
