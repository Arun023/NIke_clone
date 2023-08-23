const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-2 border ${
        borderColor ? borderColor : "border"
      } font-montserrat text-lg leading-none rounded-full ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${textColor ? textColor : "text-white"}  ${fullWidth && "w-full"}`}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
