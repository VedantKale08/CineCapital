"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Register() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-secondary w-[35vw] rounded-xl px-16 py-10 flex flex-col items-center gap-4 border border-slate-800">
        <div className="text-center">
          <p className="text-2xl font-bold">You are almost there!</p>
          <p className="text-textSecondary text-sm">Let&apos;s create a account</p>
        </div>

        <div className="flex gap-4 w-full">
          <div class="w-full">
            <label
              for="input-label"
              class="block text-sm font-medium mb-2 dark:text-white"
            >
              First name
            </label>
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none bg-transparent  dark:text-neutral-400 dark:placeholder-neutral-500 "
              placeholder="you@email.com"
            />
          </div>

          <div class="w-full">
            <label
              for="input-label"
              class="block text-sm font-medium mb-2 dark:text-white"
            >
              Last name
            </label>
            <input
              type="email"
              id="input-label"
              class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none bg-transparent  dark:text-neutral-400 dark:placeholder-neutral-500 "
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div class="w-full">
          <label
            for="input-label"
            class="block text-sm font-medium mb-2 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="input-label"
            class="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none bg-transparent  dark:text-neutral-400 dark:placeholder-neutral-500 "
            placeholder="you@email.com"
          />
        </div>

        <div class="flex w-full">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" class="text-blue hover:underline dark:text-blue">
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          onClick={() => router.push("/auth/onboard")}
          className="bg-blue w-full rounded-md py-2.5 mt-5 hover:scale-105 transition"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Register;
