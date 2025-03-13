import Image, { ImageProps } from 'next/image';
import React from 'react';

type LogoProps = Omit<ImageProps, 'src'> & {
  imageUrl: string;
};

const Logo = ({ imageUrl, alt = '', ...props }: LogoProps) => {
  return <Image src={imageUrl} alt={alt} {...props} />;
};

export default Logo;
