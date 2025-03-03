import { useSession } from "@/lib/auth-client";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-600">
          Please sign in to view your dashboard
        </div>
      </div>
    );
  }
  return (
    <div>
      hello my dear {session?.user.name}, it&apos;s your friendly spiderman
    </div>
  );
}
