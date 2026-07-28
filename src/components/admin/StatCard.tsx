import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
}

export default function StatCard({ title, value, subtitle, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <p className="mt-2 text-3xl font-black text-white">{value}</p>
          {subtitle && (
            <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
          )}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
          <Icon className="h-6 w-6 text-amber-400" />
        </div>
      </div>
    </div>
  );
}