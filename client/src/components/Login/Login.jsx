import React, { useState } from 'react';

const Login = () => {
  const [formType, setFormType] = useState('login');

  const handleFormChange = (event) => {
    setFormType(event.target.id);
  };

  return (
    <div className="max-w-xs mx-auto mt-24 shadow-xl rounded-lg  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-between border-b border-gray-300">
          <input type="radio" name="slide" id="login" checked={formType === 'login'} onChange={handleFormChange} className="hidden" />
          <input type="radio" name="slide" id="signup" checked={formType === 'signup'} onChange={handleFormChange} className="hidden" />
          <label htmlFor="login" className={`text-lg font-medium cursor-pointer ${formType === 'login' ? 'text-blue-500' : 'text-gray-600'}`}>Login</label>
          <label htmlFor="signup" className={`text-lg font-medium cursor-pointer ${formType === 'signup' ? 'text-blue-500' : 'text-gray-600'}`}>Signup</label>
          <div className="h-1 w-1/2 bg-blue-500"></div>
        </div>
        <div className="mt-6">
          <form action="#" className={` ${formType === 'login' ? 'block' : 'hidden'}`}>
            <div className="mt-4">
              <input type="text" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500" required />
            </div>
            <div className="mt-4">
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500" required />
            </div>
            <div className="mt-2 text-right">
              <a href="#" className="text-sm font-semibold text-blue-500">Forgot password?</a>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm font-medium">Not a member?</span>
              <a href="/signup" className="text-blue-500 ml-1">Signup now</a>
            </div>
          </form>
          <form action="#" className={` ${formType === 'signup' ? 'block' : 'hidden'}`}>
            <div className="mt-4">
              <input type="text" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500" required />
            </div>
            <div className="mt-4">
              <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500" required />
            </div>
            <div className="mt-4">
              <input type="password" placeholder="Confirm password" className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500" required />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
