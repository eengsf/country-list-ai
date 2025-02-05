'use client';

import GoogleIcon from '@/components/iconSVG/GoogleIcon';
import MoonIcon from '@/components/iconSVG/MoonIcon';
import SunIcon from '@/components/iconSVG/SunIcon';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkModeGradient, setIsDarkModeGradient] = useState(false);

  const toggleGradient = () => {
    setIsDarkModeGradient((prev) => !prev);
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen w-full transition-all duration-1000 cursor-pointer ${
        isDarkModeGradient
          ? 'bg-gradient-to-br from-moonThin via-moonMedium to-moonStrong'
          : 'bg-gradient-to-br from-sunThin via-sunMedium to-sunStrong'
      }`}
      onClick={toggleGradient}
    >
      <div
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 w-80 text-center rounded-2xl shadow-lg shadow-black relative border border-white/30 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center gap-2">
            {isDarkModeGradient ? (
              <MoonIcon className="text-light size-8" />
            ) : (
              <SunIcon className="text-light size-8" />
            )}
            <h1 className="text-2xl font-bold text-gray-200">
              Welcome Back!
            </h1>
          </div>
          <p className="text-gray-300 mb-6">Sign in to continue</p>

          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className={`flex items-center justify-center w-full bg-white bg-opacity-20 text-gray-200 border border-gray-300 py-3 rounded-lg shadow-md transition duration-300 gap-2 backdrop-blur-sm
              ${
                isLoading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-opacity-30 active:scale-95'
              }`}
          >
            {isLoading ? (
              <>Loading...</>
            ) : (
              <>
                <GoogleIcon size={25} />
                Sign in with Google
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
