import CreateJobForm from "@/components/jobs/CreateJobForm";

export default function CreateJobPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Post a New Job
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new job opening for candidates.
        </p>
      </div>

      <CreateJobForm />
    </div>
  );
}