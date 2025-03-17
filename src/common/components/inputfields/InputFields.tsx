import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputFieldProps<T extends FieldValues> = {
  field?: keyof T;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  register?: UseFormRegister<T>;
  required?: boolean;
};

const InputFields = <T extends FieldValues>({
  field,
  label,
  type = 'text',
  placeholder,
  className,
  // register,
  required = false,
}: InputFieldProps<T>) => {
  return (
    <div className={`relative ${label ? 'mt-5' : ''} `}>
      {label && (
        <label
          htmlFor={field as string}
          className={`font-quicksand pointer-events-none pb-[17px] text-[17px] font-semibold text-black capitalize transition-all duration-200`}
        >
          {label}
          {required && (
            <span className='font-quicksand text-[17px] font-semibold text-[#FF3D00]'>
              {' '}
              *
            </span>
          )}
        </label>
      )}
      <input
        id={field as string}
        className={` ${label ? 'peer mt-[17px] block h-[45px] w-full rounded-[5px] border border-gray-400 bg-transparent px-[17px] py-[20px] text-base placeholder-black/30' : `${className}`}`}
        type={type}
        placeholder={placeholder || label}
        // {...register(field as Path<T>, {
        //   required,
        //   onChange: (e) => setHasValue(!!e.target.value),
        //   onBlur: (e) => setHasValue(!!e.target.value),
        // })}
      />
    </div>
  );
};

export default InputFields;
