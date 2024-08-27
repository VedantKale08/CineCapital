"use client";
import React, { useState } from "react";
import OTP from "./OTP";

function Login() {
  const [isOTP, setOTP] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-secondary w-[35vw] rounded-xl px-16 py-10 flex flex-col items-center border border-slate-800">
        {!isOTP ? (
          <>
            <p className="text-2xl font-bold">Welcome to CineCapital</p>
            <p className="text-textSecondary text-sm">
              Please sign in to continue
            </p>

            <div class="w-full mt-5">
              <label
                for="input-label"
                class="block text-sm font-medium mb-2 dark:text-white"
              >
                Mobile number
              </label>
              <div className="flex gap-3 w-full">
                <div className="border border-gray-500 text-gray-500 rounded-[7px] px-3 py-3 text-sm cursor-not-allowed">
                  +91
                </div>
                <input
                  type="email"
                  id="input-label"
                  class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none bg-transparent  dark:text-neutral-400 dark:placeholder-neutral-500 "
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-textSecondary text-[12px] mt-2">
                By entering OTP you agree with our{" "}
                <span className="text-blue">Terms and Conditions</span>
              </p>
            </div>

            <button
              onClick={() => setOTP(true)}
              className="bg-blue w-full rounded-md py-2.5 mt-5 hover:scale-105 transition"
            >
              Get OTP
            </button>
          </>
        ) : (
          <OTP setOTP={setOTP} />
        )}
      </div>
    </div>
  );
}

export default Login;
