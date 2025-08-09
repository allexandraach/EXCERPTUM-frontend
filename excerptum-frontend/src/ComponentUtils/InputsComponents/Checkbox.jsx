import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export function Checkbox({
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
  errors = false,
  validation = {},
  register
}) {

  const navigate = useNavigate();

  return (
    <div className={`${containerClass} my-2`}>
      <input
        type='checkbox'
        {...register(name, validation)}
        className={`${inputClass} border-gray-300 focus:border-gray-600 focus:ring-[#937082] text-wine px-2 mx-2 rounded-md`}
        name={name}
        id={id}
        value={value}
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
          <p className={`ml-2 text-sm`}>{errors[name].message}</p>
        </div>
      }
    </div>
  )
}
