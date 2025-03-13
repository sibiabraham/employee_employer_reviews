import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputFieldProps<T extends FieldValues> = {
  field: keyof T;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegister<T>;
  required?: boolean;
};

const InputFields = <T extends FieldValues>({
  field,
  label,
  type = 'text',
  placeholder,
  // register,
  // required = false,
}: InputFieldProps<T>) => {
  // const [hasValue, setHasValue] = useState(false);
  const [hasValue] = useState(false);

  return (
    <div className='relative mx-5 mt-5 mb-15 flex flex-col'>
      <input
        id={field as string}
        className='peer block w-full border-b border-gray-400 bg-transparent py-2 text-base placeholder-transparent focus:ring-0 focus:outline-none'
        type={type}
        placeholder={placeholder || label}
        // {...register(field as Path<T>, {
        //   required,
        //   onChange: (e) => setHasValue(!!e.target.value),
        //   onBlur: (e) => setHasValue(!!e.target.value),
        // })}
      />
      {label && (
        <label
          htmlFor={field as string}
          className={`pointer-events-none absolute top-2 left-0 text-gray-500 capitalize transition-all duration-200 ${hasValue ? 'top-[-25px] left-[-12px] scale-75 text-[18px]' : ''} peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base peer-focus:-top-[25px] peer-focus:left-[-12px] peer-focus:scale-75 peer-focus:text-[18px]`}
        >
          {label}
        </label>
      )}
      <span className='after:bg-page-background pointer-events-none absolute bottom-0 left-0 h-[1px] w-full after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-300 peer-focus:after:left-0 peer-focus:after:w-full'></span>
    </div>
  );
};

export default InputFields;
