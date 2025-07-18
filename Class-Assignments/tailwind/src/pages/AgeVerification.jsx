import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const AgeVerification = () => {
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (dob) navigate("/email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002c5f] text-white px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Verify Your Age</h1>
        <p className="text-sm text-gray-300">
          Please confirm your birth year. This data will not be stored.
        </p>
        <InputField
          placeholder="DD Month YYYY"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Button label="Continue" onClick={handleContinue} />
      </div>
    </div>
  );
};
export default AgeVerification;
