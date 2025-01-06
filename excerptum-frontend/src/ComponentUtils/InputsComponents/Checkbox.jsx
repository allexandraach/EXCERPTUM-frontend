import { MdErrorOutline } from "react-icons/md";

export function Checkbox({
  containerClass,
  labelClass,
  inputClass,
  keyText,
  id,
  value,
  name,
  label,
  errors = false,
  validation = {},
  register
}) {

  return (
    <div className={`${containerClass} my-2`}>
      <input
        type='checkbox'
        {...register(name, validation)}
        className={`${inputClass} focus:border-gray-600 focus:ring-gray-400 text-gray-500 px-2 mx-2 rounded-md`}
        name={name}
        id={id}
        value={value}
        key={keyText}
      />
      <label className={`${labelClass} px-2`} htmlFor={id}>
        {label}
      </label>
      {errors?.[name] &&
        <div className="flex pl-10">
          <MdErrorOutline
            size={20}
          />
          <p className={`ml-2 text-sm`}>{errors[name].message}</p>
        </div>
      }
    </div>
  )
}
