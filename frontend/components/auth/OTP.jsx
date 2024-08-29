import { postRequest, postRequestV2 } from "@/config/axiosIntercepter";
import { verifyOtp } from "@/constants/apiEndPoints";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { OtpInput } from "reactjs-otp-input";

function OTP({ setIsOTP, userMobileNo }) {
  const [currUserOtp, setCurrUserOtp] = useState("");
  const handleChange = (currUserOtp) => setCurrUserOtp(currUserOtp);
  const router = useRouter();

  const verifyMobileOtp = async () => {
    try {
      const response = await postRequest({
        url: verifyOtp,
        body: {
          mobileNo: userMobileNo,
          otp: currUserOtp,
        },
      });
      const data = response.data;
      if (data.status) {
        toast.success(data.message);
        setCookie("token", data.data.token);
        router.push("/auth/onboard");
      } else if (data.statusCode) {
        toast.error(data.message);
        router.push("/auth/register");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="">
      <p className="text-2xl font-bold">Verify your Mobile Number</p>

      <p className="text-textSecondary text-sm text-center">
        Enter OTP sent to +91 1234567890
      </p>
      <div className="otp flex flex-col items-center mt-5">
        <OtpInput
          value={currUserOtp}
          onChange={handleChange}
          numInputs={6}
          separator={<span>&nbsp;&nbsp;</span>}
        />
        <p className="text-textSecondary text-[12px] mt-2">
          Didn&apos;t receive OTP? <span className="text-blue">Resend OTP</span>
        </p>
        <button
          onClick={verifyMobileOtp}
          className="bg-blue w-full rounded-md py-2.5 mt-5 hover:scale-105 transition"
        >
          Verify OTP
        </button>
        <div
          onClick={() => setIsOTP(false)}
          className="text-textSecondary text-[12px] mt-2 cursor-pointer"
        >
          Change Mobile Number
        </div>
      </div>
    </div>
  );
}

export default OTP;
