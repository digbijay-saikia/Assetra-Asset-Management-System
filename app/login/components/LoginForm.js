"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    // ✅ Validation
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://localhost:7107/api/Login",
        {
          UserName: username.trim(),
          Password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Save user
      localStorage.setItem("user", JSON.stringify(response.data));

      // Go to dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(
        err.response?.data || "Unable to login. Check API or network."
      );
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-16 max-h-[500px] xl:max-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login.</h1>

      <p className="text-gray-600 mb-10">
        Log in to track your assets seamlessly, manage efficiently, and stay updated in real time.
      </p>

      {error && <p className="text-red-500 mb-6">{error}</p>}

      <div className="flex flex-col gap-6">
        {/* Username */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-3 py-3 rounded-[10px]
                     bg-[#F5F4F8] border border-[#D7D3E2]
                     text-gray-800 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-[#6A2CD8]"
        />

        {/* Password with Eye */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-3 pr-10 rounded-[10px]
                       bg-[#F5F4F8] border border-[#D7D3E2]
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#6A2CD8]"
          />

          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            <img
              src={showPassword ? "/eye-off.svg" : "/eye.svg"}
              alt={showPassword ? "Hide password" : "Show password"}
              className="w-5 h-5"
            />

          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-[10px] font-semibold
                     bg-[#6A2CD8] text-white
                     hover:bg-[#5a22c6]
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
