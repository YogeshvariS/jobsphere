import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth.config";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Dashboard
        </h1>

        <div className="space-y-3">
          <p>
            <strong>Name:</strong> {session.user?.name}
          </p>

          <p>
            <strong>Email:</strong> {session.user?.email}
          </p>

          <p>
            <strong>Role:</strong> {session.user?.role}
          </p>
        </div>
      </div>
    </main>
  );
}