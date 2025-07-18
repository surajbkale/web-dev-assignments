const InputField = ({ type = "text", placeholder, value, onChange }) => {
  <input
    type={type}
    className="w-full px-4 py-3 rounded-md bg-#[0f2e5a] text-white placeholder-gray-400 outline-none foucs:ring-2 foucs:ring-cyan-400"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  ></input>;
};

export default InputField;
