import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const EmailEntry = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.includes("@")) navigate("/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002c5f] text-white px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Let’s Get Started</h1>
        <InputField
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button label="Continue" onClick={handleContinue} />
      </div>
    </div>
  );
};
export default EmailEntry;
