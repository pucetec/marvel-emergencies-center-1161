const Input = ({ type, className, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;