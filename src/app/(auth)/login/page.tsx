// import LoginForm from "@/modules/auth/components/LoginForm";

// export default function LoginPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-100">
//       <LoginForm />
//     </main>
//   );
// }

import Link from "next/link";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Search,
  Users,
} from "lucide-react";

import LoginForm from "@/modules/auth/components/LoginForm";
const benefits = [
  {
    icon: Search,
    title: "Find relevant opportunities",
    description:
      "Discover roles matching your skills and experience.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Manage jobs efficiently",
    description:
      "Publish openings and manage candidates in one place.",
  },
  {
    icon: Users,
    title: "Connect with great talent",
    description:
      "Build stronger teams with a focused hiring experience.",
  },
];

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 size-[32rem] rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-48 right-0 size-[34rem] rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <section className="hidden flex-col justify-between px-12 py-10 lg:flex xl:px-20">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-3"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <BriefcaseBusiness
                className="size-5"
                aria-hidden="true"
              />
            </span>

            <span className="text-xl font-bold tracking-tight text-slate-950">
              JobSphere
            </span>
          </Link>

          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
              <CheckCircle2
                className="size-3.5"
                aria-hidden="true"
              />
              Your career, connected
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950">
              Build your future with the{" "}
              <span className="text-indigo-600">
                right opportunity.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              JobSphere connects professionals and employers
              through a focused, transparent hiring
              experience.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map(
                ({
                  icon: Icon,
                  title,
                  description,
                }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600 shadow-sm">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} JobSphere
          </p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full">
            <Link
              href="/"
              className="mx-auto mb-8 flex w-fit items-center gap-3 lg:hidden"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <BriefcaseBusiness
                  className="size-5"
                  aria-hidden="true"
                />
              </span>

              <span className="text-xl font-bold text-slate-950">
                JobSphere
              </span>
            </Link>

            <div className="flex justify-center">
              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}