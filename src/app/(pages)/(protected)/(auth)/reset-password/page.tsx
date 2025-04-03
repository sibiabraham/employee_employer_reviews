import AuthWithSidebar from '@/common/components/authwithsidebar/AuthWithSidebar';
import React from 'react';

const page = () => {
  return (
    <AuthWithSidebar>
      <div className='relative p-6 xl:px-[58px] xl:pt-[220px]'>
        <div className='w-full'>Reset Password</div>
      </div>
    </AuthWithSidebar>
  );
};

export default page;
