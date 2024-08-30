'use client'; // Add this line to make it a Client Component

import { login } from './actions';
import { useState } from 'react';

const Login = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      await login(formData);
      // The login function will handle the redirect, so no need to do it here.
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show an error message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-black"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-red to-primary-blue mr-2"></div>
        <span className="font-semibold text-lg text-black">SkillMeterMu</span>
      </a>
      <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w/full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w/full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-red hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Belum punya akun?{' '}
              <a
                href="/register"
                className="font-medium text-primary-red hover:underline"
              >
                Register di sini.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
