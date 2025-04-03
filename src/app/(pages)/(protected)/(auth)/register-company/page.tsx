import AuthWithSidebar from '@/common/components/authwithsidebar/AuthWithSidebar';
import RegisterCompanyForm from './_components/RegisterCompanyForm';

const page = () => {
  return (
    <AuthWithSidebar>
      <div className='relative p-6 xl:px-[58px] xl:pt-[77px]'>
        <div className='w-full'>
          <RegisterCompanyForm />
        </div>
      </div>
    </AuthWithSidebar>
  );
};

export default page;
