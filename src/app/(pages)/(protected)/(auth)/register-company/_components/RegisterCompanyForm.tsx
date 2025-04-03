'use client';

import Button from '@/common/components/button/Button';
import InputFields from '@/common/components/inputfields/InputFields';
import Link from 'next/link';

const RegisterCompanyForm = () => {
  return (
    <>
      <div className='font-manrope text-[33px] font-bold'>
        <span>Register Company !</span>
      </div>
      <div className='font-manrope pt-1.5 text-[20px] font-medium text-black/70'>
        <span>
          Enter details to get unlimited access to data & information.
        </span>
      </div>
      {/* <FormProvider> */}
      <form className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <InputFields
          field='companyName'
          label='Company Name'
          type='text'
          required
          placeholder='Enter Company Name'
        />
        <InputFields
          field='email'
          label='Email'
          type='email'
          required
          placeholder='Enter Email ID'
        />
        <InputFields
          field='mobile'
          label='Mobile Number'
          type='phone'
          placeholder='Enter Mobile Number'
        />
        <InputFields
          field='password'
          label='Password'
          type='password'
          required
          placeholder='Enter password'
        />
        <InputFields
          label='Confirm Password'
          type='password'
          required
          placeholder='Re-enter password'
        />
        <div className='col-span-1 flex items-start gap-3 py-2 md:col-span-2'>
          <InputFields
            type='checkbox'
            required
            className='mt-[2px] h-[24px] w-[24px]'
          />
          <div className='align-middle text-[17px] font-medium text-black'>
            <span>By Signing Up, You’re agreeing to our </span>
            <Link href='/' className='text-dodger-blue'>
              Terms & Conditions
            </Link>
            <span> and </span>
            <Link href='/' className='text-dodger-blue'>
              Privacy Policy.
            </Link>
          </div>
        </div>
        <div className='col-span-1 flex justify-center md:col-span-2'>
          <Button className='lg:px-10 lg:py-4 lg:text-[20px]' btnType='submit'>
            Register
          </Button>
        </div>
        <div className='col-span-1 py-3 text-center text-[17px] font-semibold md:col-span-2'>
          <span>Already have an account? </span>
          <Link href='/login' className='text-dodger-blue'>
            Login
          </Link>
        </div>
      </form>
      {/* </FormProvider> */}
    </>
  );
};

export default RegisterCompanyForm;
