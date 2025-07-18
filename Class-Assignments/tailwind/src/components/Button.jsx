const Button = ({ label, onClick, disabled }) => {
  <button
    className={`w-full py-3 rounded-md text-white font-semibold transition ${
      disabled
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-cyan-400 hover:bg-cyan-500"
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>;
};

export default Button;
