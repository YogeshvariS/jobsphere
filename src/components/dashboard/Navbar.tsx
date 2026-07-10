interface NavbarProps {
  name: string;
  role: string;
}

export default function Navbar({
  name,
  role,
}: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-medium">
            {name}
          </p>

          <p className="text-sm capitalize text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </header>
  );
}