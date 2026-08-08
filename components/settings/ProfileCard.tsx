import { Building2, User, Crown } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Building2 className="text-cyan-400" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Company Profile
          </h2>

          <p className="text-sm text-gray-400">
            Workspace information
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Info
          icon={<Building2 size={17} />}
          label="Company"
          value="RouteMind Logistics"
        />

        <Info
          icon={<User size={17} />}
          label="Admin"
          value="Vaibhav"
        />

        <Info
          icon={<Crown size={17} />}
          label="Plan"
          value="Enterprise"
        />
      </div>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0F1115] p-4">
      <div className="flex items-center gap-3 text-gray-400">
        {icon}
        <span>{label}</span>
      </div>

      <span className="font-medium text-white">
        {value}
      </span>
    </div>
  );
}