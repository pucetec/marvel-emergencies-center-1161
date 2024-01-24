const Button = ({className, dataBsToggle, dataBsTarget, onClick, text}) => {
  return (
    <button
      className={className}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;