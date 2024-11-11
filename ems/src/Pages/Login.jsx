import React, { useState } from "react";

function Login({ login }) {
  let [email , setEmail] = useState('');
  let [pass , setPass] = useState('');

  const submittingForm = (e) => {
    e.preventDefault();
    login(email , pass);
    setEmail("")
    setPass("")
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-emerald-500 border-2 p-20">
        <form onSubmit={submittingForm} className="flex flex-col justify-center items-center">
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent border-2 border-emerald-500 outline-none mx-5 py-2 px-4 rounded-md"
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="bg-transparent border-2 border-emerald-500 outline-none m-5 py-2 px-4 rounded-md"
            value={pass}
            onChange={(e) => (setPass(e.target.value))}
          />
          <button className="bg-emerald-500 outline-none py-2 px-5 rounded-md text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
