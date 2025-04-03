import AuthWithSidebar from '@/common/components/authwithsidebar/AuthWithSidebar';
import ForgotPasswordForm from './_components/ForgotPasswordForm';

const page = () => {
  return (
    <AuthWithSidebar>
      <div className='relative w-[565px] p-6 xl:px-[58px] xl:pt-[220px]'>
        <div className='w-full'>
          <ForgotPasswordForm />
        </div>
      </div>
    </AuthWithSidebar>
  );
};

export default page;
