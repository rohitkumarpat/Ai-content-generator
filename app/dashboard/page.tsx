import { currentUser } from "@clerk/nextjs/server";
import DashboardClient from "./dashboardclient";
import { prismaclient } from "@/lib/db";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) return null;

  const email = user.emailAddresses[0]?.emailAddress ?? "";
  const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

 
  const userdetail = await prismaclient.user.upsert({
    where: {
      clerkid: user.id,
    },
    update: {
      email,
      name,
    },
    create: {
      clerkid: user.id,
      email,
      name,
    },
  });

 
  const safeUser = {
    id: userdetail.clerkid,
    email: userdetail.email,
    firstName: userdetail.name || " ",
  };

  return <DashboardClient user={safeUser} />;
}
