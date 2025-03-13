import { testimonialData } from '@/common/data/data';
import RightSection from '@/app/(pages)/(public)/(home)/_components/herosection/RightSection';
import Testimonial from '@/app/(pages)/(public)/(home)/_components/herosection/Testimonial';

const HeroSection = () => {
  return (
    <div className='relative w-full py-7 lg:h-[745px]'>
      <div className="lg:absolute lg:top-[5%] lg:-right-[15%] lg:h-full lg:w-full lg:bg-[url('/assets/jpg_png/bannerbg.png')] lg:bg-contain lg:bg-right lg:bg-no-repeat" />
      <div className='grid min-h-[703px] grid-cols-1 lg:grid-cols-2'>
        <RightSection />
        <div className='z-10 hidden py-10 lg:block'>
          <div className='flex w-full flex-col gap-20 lg:flex-row'>
            <Testimonial testimonial={testimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
