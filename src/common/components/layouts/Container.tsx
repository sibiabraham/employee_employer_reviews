import { cn } from '@/common/utils/cn';
import { type ComponentProps } from 'react';

type Props = ComponentProps<'section'>;

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <section
      className={cn(
        'px-gutter-mobile sm:px-gutter-desktop max-w-screen-1xl mx-auto box-content',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Container;
