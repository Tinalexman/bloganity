"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { register, login } from "@/services/userService";
import { bloganityKey } from "@/constants";
import { Loader } from "@mantine/core";

const Authentication = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [authType, setAuthType] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onSuccess = (res: any) => {
    toast.success(
      authType === 0
        ? "We are happy to have you at Bloganity"
        : "Welcome back to Bloganity"
    );

    let details = {
        name: res.data.payload.user.name,
        token: res.data.payload.token,
    };
    
    window.localStorage.setItem(bloganityKey, JSON.stringify(details));
    window.location.assign("/create-blog");
    setLoading(false);
  };
  const onError = (err: any) => {
    toast.error(`${err.response.data.error}`);
    setLoading(false);
  };

  function authenticate() {
    if (loading) return;

    if (authType === 0 && name.length === 0) {
      toast.error("Won't you tell us your name?");
      return;
    }

    if (email.length === 0) {
      toast.error("You forgot your email :(");
      return;
    }

    if (password.length === 0) {
      toast.error("How's this supposed to work without a password?");
      return;
    }

    setLoading(true);

    if (authType === 0) {
      register(
        {
          email: email,
          name: name,
          password: password,
        },
        onSuccess,
        onError
      );
    } else {
      login(
        {
          email: email,
          password: password,
        },
        onSuccess,
        onError
      );
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="bg-tertiary w-[100vw] h-[100vh] md:h-auto">
        <Navbar />
        <div className="flex flex-col gap-10 w-full h-[85vh] md:h-auto items-center md:pt-20 md:pb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-secondary text-4xl md:text-2xl md:text-center font-bold">
              Auth<span className="text-secondary-1">en</span>
              <span className="text-white">tica</span>
              <span className="text-primary">tion</span>.
            </h1>
            <p className="text-tertiary-1 text-md text-center">
              Are you signing up or signing in?
            </p>
          </div>

          <div className="my-5 w-fit flex gap-10">
            <button
              onClick={() => setAuthType(0)}
              className={`${
                authType === 0 ? "bg-primary" : "border-2 border-primary"
              } w-[150px] h-[50px] rounded text-white font-semibold shadow-custom-1 transition-all duration-300 ease-out`}
            >
              Register
            </button>
            <button
              onClick={() => setAuthType(1)}
              className={`${
                authType === 1 ? "bg-primary" : "border-2 border-primary"
              } w-[150px] h-[50px] rounded text-white font-semibold shadow-custom-1 transition-all duration-300 ease-out`}
            >
              Login
            </button>
          </div>

          <div className="flex flex-col gap-5 w-[50%] md:w-full md:px-5 items-center">
            {authType === 0 && (
              <div className="w-full">
                <p className="text-tertiary-1 text-md">Full Name</p>
                <input
                  type="text"
                  value={name}
                  placeholder="What's your name"
                  className="w-full h-[50px] rounded border-2 border-tertiary-1 font-medium text-white  px-4 bg-tertiary"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="w-full">
              <p className="text-tertiary-1 text-md">Email</p>
              <input
                type="text"
                value={email}
                placeholder="What's your email"
                className="w-full h-[50px] rounded border-2 border-tertiary-1 font-medium text-white  px-4 bg-tertiary"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full relative">
              <p className="text-tertiary-1 text-md">Password</p>
              <input
                type={show ? "text" : "password"}
                value={password}
                placeholder="What's your password"
                className="w-full h-[50px] rounded border-2 border-tertiary-1 font-medium text-white px-4 bg-tertiary"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute cursor-pointer text-primary top-9 right-4"
              >
                {show ? (
                  <MdVisibilityOff size={"24px"} />
                ) : (
                  <MdVisibility size={"24px"} />
                )}
              </div>
            </div>

            <button
              onClick={authenticate}
              className="bg-primary w-[150px] h-[50px] rounded text-white font-semibold shadow-custom-1"
            >
              {loading ? <Loader color="primary" /> : "Let's go"}
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Authentication;
