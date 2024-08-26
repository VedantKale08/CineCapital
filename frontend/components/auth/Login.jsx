import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-secondary w-[40vw] rounded-xl px-5 py-8 flex flex-col items-center">
        <p className="text-xl font-bold">Welcome to CineCapital</p>
        <p className="text-textSecondary text-sm">Please sign in to continue</p>
        <button className="flex items-center justify-center border border-gray-300 rounded-lg p-2 w-full max-w-xs bg-white hover:bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google logo"
            className="w-5 h-5 mr-3"
          />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login