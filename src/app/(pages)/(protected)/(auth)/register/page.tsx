import AuthWithSidebar from '@/common/components/authwithsidebar/AuthWithSidebar';
import RegisterForm from './_components/RegisterForm';

const Page = () => {
  return (
    <AuthWithSidebar>
      <div className='relative p-6 xl:px-[58px] xl:pt-[77px]'>
        <div className='w-full'>
          <RegisterForm />
        </div>
      </div>
    </AuthWithSidebar>
  );
};

export default Page;
