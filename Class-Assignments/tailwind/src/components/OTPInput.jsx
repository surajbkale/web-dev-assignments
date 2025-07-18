import React from "react";

const OTPInput = ({ value, onChange }) => {
  return (
    <div className="flex justify-center gap-2">
      {Array(6)
        .fill()
        .map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-10 h-12 text-center rounded bg-[#0f2e5a] text-white text-xl"
            value={value[i] || ""}
            onChange={(e) => onChange(e, i)}
          />
        ))}
    </div>
  );
};

export default OTPInput;
