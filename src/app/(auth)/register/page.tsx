// export default function RegisterPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center">
//       <h1>Register Page</h1>
//       <h4>Sign up with email or phone</h4>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import {
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f8fc] p-4 sm:p-8 lg:p-12">
      <div className="mx-auto grid min-h-[850px] max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2">
        
        {/* Left Section */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#f4f2ff] via-[#eeecff] to-[#e7e3ff] p-12 lg:flex lg:flex-col">
          {/* Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6d4aff] to-[#4b2bbd] text-white shadow-lg">
            <UserRound size={24} />
          </div>

          {/* Heading */}
          <div className="mt-12">
            <h1 className="max-w-xs text-5xl font-bold leading-tight text-[#1e293b]">
              Create your account
            </h1>

            <p className="mt-5 max-w-sm text-lg leading-8 text-gray-600">
              Sign up with email or phone and start your journey with us.
            </p>
          </div>

          {/* Features */}
          <div className="mt-14 space-y-7">
            <Feature
              icon={<ShieldCheck size={22} />}
              title="Secure & Private"
              description="Your data is safe with us"
            />

            <Feature
              icon={<Zap size={22} />}
              title="Quick & Easy"
              description="Create your account in minutes"
            />

            <Feature
              icon={<Heart size={22} />}
              title="Designed for You"
              description="Experience a product you'll love"
            />
          </div>

          {/* Bottom Illustration */}
          <div className="relative mt-auto flex items-end justify-center pt-16">
            <div className="absolute bottom-2 left-8 h-28 w-28 rounded-full bg-purple-300/30 blur-2xl" />

            <div className="relative rotate-[-8deg] rounded-3xl border border-white/60 bg-white/50 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex h-24 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e3dcff] to-[#b8a8ff]">
                <UserRound size={50} className="text-[#6544d8]" />
              </div>

              <div className="mt-5 h-3 w-full rounded-full bg-white/80" />
              <div className="mt-3 h-3 w-3/4 rounded-full bg-white/70" />
              <div className="mt-3 h-3 w-1/2 rounded-full bg-white/60" />
            </div>

            <div className="absolute bottom-[-10px] right-12 h-16 w-16 rounded-full bg-[#7152e8] shadow-xl" />
          </div>
        </section>

        {/* Right Section */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-14">
          <div className="w-full max-w-md">
            
            {/* Header */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Sign up
              </h2>

              <p className="mt-3 text-gray-500">
                Already have an account?{" "}
                <button className="font-semibold text-[#6544d8] hover:underline">
                  Sign in
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span className="text-xl font-bold text-[#4285F4]">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <span className="text-xl font-bold text-black">●</span>
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm font-medium text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-5">
              
              {/* Tabs */}
              <div className="flex gap-8 border-b border-gray-200">
                <button
                  type="button"
                  className="border-b-2 border-[#6544d8] px-3 pb-3 font-semibold text-[#6544d8]"
                >
                  Email
                </button>

                <button
                  type="button"
                  className="px-3 pb-3 font-medium text-gray-500 hover:text-gray-800"
                >
                  Phone
                </button>
              </div>

              {/* Full Name */}
              <InputField
                label="Full name"
                icon={<UserRound size={20} />}
                placeholder="Enter your full name"
              />

              {/* Email */}
              <InputField
                label="Email address"
                type="email"
                icon={<Mail size={20} />}
                placeholder="Enter your email"
              />

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-12 pr-12 outline-none transition focus:border-[#6544d8] focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  At least 8 characters with a number or symbol
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-gray-200 py-3.5 pl-12 pr-12 outline-none transition focus:border-[#6544d8] focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#6544d8]"
                />

                <span className="text-sm leading-6 text-gray-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-medium text-[#6544d8] hover:underline"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="font-medium text-[#6544d8] hover:underline"
                  >
                    Privacy Policy
                  </button>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5d35d6] to-[#6944d8] py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
              >
                Create account
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Bottom Text */}
            <p className="mt-8 text-center text-sm leading-6 text-gray-500">
              By signing up, you agree to our{" "}
              <button className="font-medium text-[#6544d8] hover:underline">
                Terms of Service
              </button>
              <br />
              and{" "}
              <button className="font-medium text-[#6544d8] hover:underline">
                Privacy Policy
              </button>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/50 text-[#6544d8] shadow-sm backdrop-blur">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function InputField({
  label,
  icon,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-200 py-3.5 pl-12 pr-4 outline-none transition focus:border-[#6544d8] focus:ring-4 focus:ring-purple-100"
        />
      </div>
    </div>
  );
}