import { MdErrorOutline } from "react-icons/md";

export function Input({
  type,
  name,
  id,
  label,
  placeholder,
  errors = () => false,
  value,
  containerClass,
  labelClass,
  inputClass,
  defaultValue,
  pattern,
  disabled,
  register,
  validation = {}
}) {

  return (
    <div className={`${containerClass} inputWrapper flex flex-col p-2`}>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <input
        {...register(name, validation)}
        value={value}
        type={type}
        name={name}
        className={`${inputClass} p-[0.8rem] border-gray-300 hover:border-gray-600 focus:ring-secondary focus:border-secondary rounded-custom shadow-sm`}
        placeholder={placeholder}
        id={id}
        key={id}
        defaultValue={defaultValue || ''}
        pattern={pattern || null}
        disabled={disabled || false}
      />
      {errors?.[name] &&
        <div className="flex pl-2">
          <MdErrorOutline
            size={20}
          />
          <p className={`ml-2 text-sm`}>{errors[name].message}</p>
        </div>
      }
    </div>
  );
}