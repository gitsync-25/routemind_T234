"use client";

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";

export default function NotificationSettings() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-yellow-500/10 p-3">
          <Bell className="text-yellow-400" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Notifications
          </h2>

          <p className="text-sm text-gray-400">
            Choose how RouteMind alerts you.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <NotificationRow
          icon={<Mail size={18} />}
          title="Email Alerts"
          description="Receive important fleet alerts by email."
          defaultChecked
        />

        <NotificationRow
          icon={<MessageSquare size={18} />}
          title="SMS Alerts"
          description="Get critical delivery updates by SMS."
        />

        <NotificationRow
          icon={<Smartphone size={18} />}
          title="Push Notifications"
          description="Receive real-time dashboard notifications."
          defaultChecked
        />
      </div>
    </div>
  );
}

function NotificationRow({
  icon,
  title,
  description,
  defaultChecked = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#0F1115] p-4">
      <div className="flex items-center gap-3">
        <div className="text-gray-400">
          {icon}
        </div>

        <div>
          <p className="font-medium text-white">
            {title}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>
        </div>
      </div>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4 accent-cyan-500"
      />
    </label>
  );
}