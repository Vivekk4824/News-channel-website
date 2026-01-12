import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, AlertCircle } from "lucide-react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Signinform = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

    const user = useSelector((state) => state.user);
  console.log("Redux state:", user);
  

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ UPDATED: real backend login
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  dispatch(signInStart());   // 🔵 login started


  try {
    const res = await fetch("http://localhost:3100/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      dispatch(signInFailure(data.message || "Login failed")); // 🔴 login failed
      setError(data.message || "Invalid email or password");
      return;
    }

    dispatch(signInSuccess(data.user || data));
  // 🟢 login success (store user)
    navigate("/");
  } catch (err) {
    dispatch(signInFailure("Server error"));
    setError("Server error. Please try again.");
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl bg-white p-12 rounded-2xl shadow-2xl"
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-6"
      >
        <ArrowLeft size={18} />
        Back to home
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Sign in to Star 24 Fast News
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Access newsroom updates and exclusive content
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
      
        {/* Email */}
        <div>
          <label className="block text-base font-semibold mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@star24.com"
              className="w-full pl-12 pr-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-base font-semibold mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-red-700 transition disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="text-center text-base text-gray-600 mt-8">
        Don’t have an account?{" "}
        <Link to="/sign-up" className="text-red-600 font-bold hover:underline">
          Create one
        </Link>
      </p>
    </motion.div>
  );
};

export default Signinform;
