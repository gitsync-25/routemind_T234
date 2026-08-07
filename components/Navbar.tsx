"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, Search, Bell, Settings, X, CheckCircle2, ShieldAlert } from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const notifications = [
    {
      id: 1,
      title: "Reroute applied for TRK-842",
      time: "2 mins ago",
      type: "success",
    },
    {
      id: 2,
      title: "Weather Alert in Fleet Region B",
      time: "15 mins ago",
      type: "warning",
    },
  ];

  return (
    <header className="bg-surface-glass/10 text-primary sticky top-0 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-primary/5 flex justify-between items-center w-full px-4 md:px-6 h-16 z-40 shrink-0">
      {/* Mobile Menu Button */}
      <button
        onClick={onToggleSidebar}
        className="md:hidden p-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
        aria-label="Toggle mobile navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex-1 flex items-center justify-end md:justify-between w-full">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-surface-container-low rounded-lg border border-outline-variant px-3 py-1.5 focus-within:border-primary-fixed-dim transition-all w-72">
          <Search className="w-4 h-4 text-text-muted mr-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search routes, drivers, orders..."
            className="bg-transparent border-none outline-none focus:ring-0 text-xs text-on-surface w-full p-0 font-mono placeholder:text-text-muted"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="text-text-muted hover:text-on-surface ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Notifications Button & Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (unreadCount > 0) setUnreadCount(0);
              }}
              className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-white/5 relative focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary-container rounded-full pulse-dot" />
              )}
            </button>

            {/* Notifications Menu */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest border border-white/10 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <span className="font-display font-semibold text-sm text-on-surface">
                    Notifications
                  </span>
                  <span className="text-xs font-mono text-primary-fixed">
                    System Live
                  </span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-2.5 rounded-lg bg-surface-variant/40 hover:bg-surface-variant/70 transition-colors flex items-start gap-2.5"
                    >
                      {n.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                      ) : (
                        <ShieldAlert className="w-4 h-4 text-tertiary-container shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-xs text-on-surface">{n.title}</p>
                        <span className="text-[10px] text-text-muted font-mono">
                          {n.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-white/5 focus:outline-none"
            aria-label="System Settings"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Profile Avatar */}
          <div className="flex items-center gap-3 pl-2 border-l border-white/10">
            <div className="h-9 w-9 rounded-full bg-surface-variant border border-outline-variant overflow-hidden relative shadow-md">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRTk6K5y8qxyl3imu9mUcYq7hU0wL7mND_mo7VlAiIQ2900Z88hbBgN1z06FLFar-uraLRs22yZozE-aRGsC7D9B682K0B5R4pcPz75bCIMTOO9hpeo4B8qDJa3mCmz6EBrC93TFVlbannH1h74YQG1wVzm6LJI1aJIr02tW7cTZ8GFo8dTMhNeYNzCsJUEvgo-k6hQsI7L7Hu0Zg_SAb4-ZdctNStAYXm51rrrf7zn5YIolGVtoifGg"
                alt="Executive User Profile"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
