export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
          Y
        </div>

        <div>
          <p className="font-medium">
            Yogeshvari
          </p>

          <p className="text-sm text-gray-500">
            Job Seeker
          </p>
        </div>
      </div>
    </header>
  );
}