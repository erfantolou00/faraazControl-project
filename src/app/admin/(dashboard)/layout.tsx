import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div dir="rtl" className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 overflow-auto p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}