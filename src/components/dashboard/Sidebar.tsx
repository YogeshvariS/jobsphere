import Link from "next/link";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Heart,
  User,
  Settings,
  PlusCircle
} from "lucide-react";

import LogoutButton from "./LogoutButton";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    href: "/dashboard/jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "Post Job",
    href: "/dashboard/jobs/create",
    icon: PlusCircle,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: FileText,
  },
  {
    name: "Saved Jobs",
    href: "/dashboard/saved",
    icon: Heart,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold">
          JobSphere
        </h1>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <LogoutButton />
      </div>
    </aside>
  );
}