import { UserProfile } from "@clerk/nextjs";

export default function Setting() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-5">
      <div className="max-w-3xl">
        <UserProfile
          appearance={{
            elements: {
              card: "shadow-none border border-gray-200",
              navbar: "shadow-none",
              footer: "hidden",
            },
            variables: {
              colorPrimary: "#6366f1",
            },
          }}
        />
      </div>
    </div>
  );
}
