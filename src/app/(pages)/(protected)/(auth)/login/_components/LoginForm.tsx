import Button from '@/common/components/button/Button';
import InputFields from '@/common/components/inputfields/InputFields';
import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
  return (
    <>
      <div className='font-manrope text-[33px] font-bold'>
        <span>Login !</span>
      </div>
      <div className='font-manrope pt-1.5 text-[20px] font-medium text-black/70'>
        <span>Enter your Email Id & Password to Login.</span>
      </div>
      {/* <FormProvider> */}
      <form className=''>
        <InputFields
          field='email'
          label='Email'
          type='email'
          required
          placeholder='Enter Email ID'
        />
        <InputFields
          field='password'
          label='Password'
          type='password'
          required
          placeholder='Enter password'
        />
        <div className='mt-2.5 text-end'>
          <Link
            href={'/forgot-password'}
            className='text-dodger-blue font-manrope text-[17px] font-semibold'
          >
            Forget Password?
          </Link>
        </div>
        <div className='mb-[32px] flex flex-row gap-2'>
          <InputFields
            type='checkbox'
            required
            className='mt-[2px] h-[24px] w-[24px]'
          />
          <div className='align-middle text-[17px] font-medium text-black'>
            <span>Remember me </span>
          </div>
        </div>

        <div className='col-span-1 flex justify-center md:col-span-2'>
          <Button className='lg:px-10 lg:py-4 lg:text-[20px]' btnType='submit'>
            Login
          </Button>
        </div>
        <div className='col-span-1 py-3 text-center text-[17px] font-semibold md:col-span-2'>
          <span>{`Don’t have an account?`} </span>
          <Link href='/register' className='text-dodger-blue'>
            Register here
          </Link>
        </div>
      </form>
      {/* </FormProvider> */}
    </>
  );
};

export default LoginForm;
