// export default function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     setLoading(true);
//     setError("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     setLoading(false);

//     if (result?.error) {
//       setError("Invalid email or password");
//       return;
//     }

//     router.push("/dashboard");
//   };

//   return (
//     <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
//       <h1 className="mb-6 text-center text-3xl font-bold">
//         Login
//       </h1>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="mb-2 block font-medium"
//           >
//             Email
//           </label>

//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
//             value={email}
//             onChange={(e) =>
//               setEmail(e.target.value)
//             }
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="mb-2 block font-medium"
//           >
//             Password
//           </label>

//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
//             value={password}
//             onChange={(e) =>
//               setPassword(e.target.value)
//             }
//             required
//           />
//         </div>

//         {error && (
//           <p className="mb-4 text-sm text-red-600">
//             {error}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full rounded-md bg-black p-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setError("Invalid email or password.");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError(
        "Unable to sign in right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] sm:p-8">
        <div className="mb-8">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
            <LockKeyhole
              className="size-6"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            Welcome back
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in to manage your jobs and applications.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <span>{error}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />

              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                disabled={loading}
                required
                className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <span className="text-xs text-slate-400">
                Minimum 8 characters
              </span>
            </div>

            <div className="relative">
              <LockKeyhole
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />

              <input
                id="password"
                name="password"
                type={
                  showPassword ? "text" : "password"
                }
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                disabled={loading}
                required
                className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((current) => !current)
                }
                disabled={loading}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                aria-pressed={showPassword}
                className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed"
              >
                {showPassword ? (
                  <EyeOff
                    className="size-4"
                    aria-hidden="true"
                  />
                ) : (
                  <Eye
                    className="size-4"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
          >
            {loading ? (
              <>
                <Loader2
                  className="size-4 animate-spin"
                  aria-hidden="true"
                />
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </>
            )}
          </button>
        </form>

        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            New to JobSphere?
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Link
          href="/register"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Create an account
        </Link>
      </div>

      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        By signing in, you agree to JobSphere&apos;s{" "}
        <span className="font-medium text-slate-700">
          Terms
        </span>{" "}
        and{" "}
        <span className="font-medium text-slate-700">
          Privacy Policy
        </span>
        .
      </p>
    </div>
  );
}