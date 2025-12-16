import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, User } from "lucide-react";

const SignUpform = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
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
        <ArrowLeft />
        Back to home
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Create your Star 24 account
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Join our trusted local news community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-base font-semibold mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full pl-12 pr-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-semibold mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="email"
              name="email"
              required
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
              onChange={handleChange}
              placeholder="Create a strong password"
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

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-red-700 transition"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-base text-gray-600 mt-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-red-600 font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </motion.div>
  );
};

export default SignUpform;
