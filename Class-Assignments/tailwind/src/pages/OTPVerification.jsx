import { useState } from "react";
import OTPInput from "../components/OTPInput";
import Button from "../components/Button";

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleOTPChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    const finalCode = otp.join("");
    console.log("Verifying:", finalCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002c5f] text-white px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Check Your Email For A Code</h1>
        <p className="text-sm text-gray-300">
          Enter the verification code sent to your email
        </p>
        <OTPInput value={otp} onChange={handleOTPChange} />
        <Button label="Verify" onClick={handleVerify} />
        <p className="text-sm text-gray-400">
          Can’t find the email? Click{" "}
          <span className="underline cursor-pointer">here</span> to resend.
        </p>
      </div>
    </div>
  );
};
export default OTPVerification;
