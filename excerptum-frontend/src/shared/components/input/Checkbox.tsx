import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import type { FieldError, FieldErrors, FieldValues, UseFormRegister, RegisterOptions, Path } from 'react-hook-form';

interface CheckboxProps<T extends FieldValues> {
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  keyText?: string;
  id: string;
  value?: boolean;
  name: Path<T>;
  label: string;
  link?: string;
  linkText?: string;
  errors?: FieldErrors<T>;
  validation?: RegisterOptions<T, Path<T>>;
  register: UseFormRegister<T>;
}

export function Checkbox<T extends FieldValues>({
  containerClass,
  labelClass,
  inputClass,
  keyText,
  id,
  value,
  name,
  label,
  link,
  linkText,
  errors,
  validation = {},
  register
}: CheckboxProps<T>) {

  const navigate = useNavigate();

  return (
    <div className={`${containerClass} my-2`}>
      <input
        type='checkbox'
        {...register(name, validation)}
        className={`${inputClass} border-gray-300 focus:border-gray-600 focus:ring-[#937082] text-wine px-2 mx-2 rounded-md`}
        name={name}
        id={id}
        value={value !== undefined ? String(value) : undefined}
        key={keyText}
      />
      <label className={`${labelClass} inline px-2`} htmlFor={id}>
        {label}
        {link &&
          <button
            type='button'
            className='ml-1 underline'
            onClick={() => navigate(link)}>
            {linkText}
          </button>
        }
      </label>
      {errors?.[name] &&
        <div className='flex pl-10'>
          <MdErrorOutline
            size={20}
          />
          <p className={`ml-2 text-sm`}>{(errors[name] as FieldError | undefined)?.message}</p>
        </div>
      }
    </div>
  )
}
