// app/page.tsx
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const headersList = await headers();
  const accept = headersList.get("accept-language") || "";
  const locale = accept.includes("en") ? "en" : "fa";
  redirect(`/${locale}`);
}