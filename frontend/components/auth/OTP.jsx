import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { OtpInput } from "reactjs-otp-input";

function OTP({ setOTP }) {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);
  const router = useRouter();
  return (
    <div className="">
      <p className="text-2xl font-bold">Verify your Mobile Number</p>

      <p className="text-textSecondary text-sm text-center">
        Enter OTP sent to +91 1234567890
      </p>
      <div className="otp flex flex-col items-center mt-5">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>&nbsp;&nbsp;</span>}
        />
        <p className="text-textSecondary text-[12px] mt-2">
          Didn't receive OTP? <span className="text-blue">Resend OTP</span>
        </p>
        <button
          onClick={() => router.push("/auth/register")}
          className="bg-blue w-full rounded-md py-2.5 mt-5 hover:scale-105 transition"
        >
          Verify OTP
        </button>
        <div
          onClick={() => setOTP(false)}
          className="text-textSecondary text-[12px] mt-2 cursor-pointer"
        >
          Change Mobile Number
        </div>
      </div>
    </div>
  );
}

export default OTP;
