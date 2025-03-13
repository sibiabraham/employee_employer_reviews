import Logo from '@/common/components/logo/Logo';
import Container from '../Container';
import Menu from './components/Menu';

const Header = () => {
  return (
    <div className='flex min-h-[128px] items-center bg-[#007DFC] py-5 text-white'>
      <Container className='flex w-full justify-between 2xl:max-w-full'>
        <div>
          <Logo
            className='rounded-[10px]'
            alt='Logo'
            imageUrl='/assets/jpg_png/employee_reviews.png'
            width={210}
            height={96}
          />
        </div>
        <div className='flex items-center'>
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
