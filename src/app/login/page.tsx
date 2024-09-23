"use client";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Login with WorkOS</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
