'use client';
import Card from '@/common/components/card/Card';
import InputFields from '@/common/components/inputfields/InputFields';
import React from 'react';

const RegisterForm = () => {
  return (
    <Card className='shadow-register m-auto w-7xl py-14 text-center'>
      <h2 className='font-manrope mb-15 text-[35px] font-semibold uppercase'>
        Register
      </h2>
      <form>
        <div className='my-5'>
          <InputFields
            field='firstName'
            label='First Name'
            type='text'
            required
          />
        </div>

        <div className='my-5'>
          <InputFields field='username' label='Username' type='text' required />
        </div>
        <div className='my-5'>
          <InputFields
            field='password'
            label='Password'
            type='password'
            required
          />
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
