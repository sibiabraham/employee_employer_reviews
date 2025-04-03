'use client';
import Button from '@/common/components/button/Button';
import InputFields from '@/common/components/inputfields/InputFields';
import Link from 'next/link';
import React from 'react';

const ForgotPasswordForm = () => {
  return (
    <>
      <div className='font-manrope text-[33px] font-bold'>
        <span>Forget Password !</span>
      </div>
      <div className='font-manrope pt-1.5 text-[20px] font-medium text-black/70'>
        <span>
          {`Don’t worry! it happens, Please enter the details associated with your
          account.`}
        </span>
      </div>
      <form className='mt-[56px]'>
        <InputFields
          field='email'
          label='Email'
          type='email'
          required
          placeholder='Enter Email ID'
        />
        <Button
          className='mt-[68px] lg:px-10 lg:py-4 lg:text-[20px]'
          btnType='submit'
        >
          get otp
        </Button>
      </form>
      <div className='text-center'>
        <Link
          href={'/'}
          className='font-manrope text-dodger-blue text-[18px] font-semibold'
        >
          Need Help
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
