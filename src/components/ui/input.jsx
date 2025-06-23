const Input = ({
  label,
  id,
  name,
  type,
  required,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
