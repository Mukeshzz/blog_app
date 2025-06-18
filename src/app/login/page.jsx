"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  console.log(status);
  

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center mt-[60px]">
      <div className="bg-[var(--softBg)] md:py-[150px] md:px-[200px] sm:py-[50px] sm:px-[100px] p-[30px] flex flex-col justify-center items-center gap-[50px] rounded-[10px]">
        <div
          className="p-5 rounded-[5px] border-none text-white font-bold cursor-pointer bg-[#ff5555] text-[14px] sm:text-[16px]"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className="p-5 rounded-[5px] border-none text-white font-bold cursor-pointer bg-[#111] text-[14px] sm:text-[16px]">
          Sign in with Github
        </div>
        <div className="p-5 rounded-[5px] border-none text-white font-bold cursor-pointer bg-[#087BEA] text-[14px] sm:text-[16px]">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
