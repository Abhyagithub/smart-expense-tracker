import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // 🔐 Replace this with your API call
      console.log("Logging in with:", { email, password, remember });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // fake delay
      alert("Login successful!");
    } catch (error) {
      setErrors({ api: "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        {errors.api && (
          <div className="p-3 mt-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded-lg">
            {errors.api}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-lg transition-colors ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Extra Options */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
