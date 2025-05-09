import AuthWithSidebar from '@/common/components/authwithsidebar/AuthWithSidebar';
import LoginForm from './_components/LoginForm';

export default function Login() {
  return (
    <AuthWithSidebar>
      <div className='relative p-6 xl:px-[58px] xl:pt-[220px]'>
        <div className='w-full'>
          <LoginForm />
        </div>
      </div>
    </AuthWithSidebar>
  );
}
