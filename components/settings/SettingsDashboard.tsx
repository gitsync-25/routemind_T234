import ProfileCard from "./ProfileCard";
import NotificationSettings from "./NotificationSettings";
import AIPreferences from "./AIPreferences";

export default function SettingsDashboard() {
  return (
    <main className="min-h-screen bg-[#0B1120] p-6">

      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your RouteMind workspace.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <ProfileCard />

        <NotificationSettings />

      </div>

      <div className="mt-6">

        <AIPreferences />

      </div>

    </main>
  );
}