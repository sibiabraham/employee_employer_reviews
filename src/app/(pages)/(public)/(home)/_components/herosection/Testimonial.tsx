import Card from '@/common/components/card/Card';
import React from 'react';
import { TestimonialItemsProps } from '@/app/(pages)/(public)/(home)/_types/types';

const Testimonial = ({
  testimonial,
}: {
  testimonial: TestimonialItemsProps[];
}) => {
  return testimonial.map((testimonials, index) => (
    <div
      key={testimonials.id}
      className={`relative ${
        index === 0 ? 'lg:top-15 lg:left-28' : 'lg:left-28 lg:translate-y-2/3'
      }`}
    >
      <Card
        className={`shadow-card w-[305px] ${index === 0 ? 'min-h-[409px]' : 'min-h-[375px]'}`}
      >
        <p>{testimonials.name}</p>
        <p>{testimonials.reviewsTotal}</p>
        <p>{testimonials.date}</p>
        <p>{testimonials.testimonialTitle}</p>
        <p>{testimonials.testimonialDesc}</p>
      </Card>
    </div>
  ));
};

export default Testimonial;
