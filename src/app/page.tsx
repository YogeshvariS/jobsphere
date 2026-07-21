import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <BriefcaseBusiness className="size-7" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          JobSphere
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Find the right opportunity.
          <span className="block text-indigo-600">
            Hire the right talent.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          A modern job marketplace connecting talented
          professionals with companies building the future.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Get started
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/login"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}