"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Route,
  MapPin,
  Truck,
  TrendingUp,
  HelpCircle,
  User,
  Plus,
  X,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewOptimization: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onNewOptimization,
}) => {

  const pathname = usePathname();
 const navItems = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    label: "Planner",
    icon: Route,
    href: "/planner",
  },
  {
    label: "Tracking",
    icon: MapPin,
    href: "/tracking",
  },
  {
    label: "Fleet",
    icon: Truck,
    href: "/fleet",
  },
  {
    label: "Insights",
    icon: TrendingUp,
    href: "/insights",
  },
];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          bg-surface-container-lowest text-primary font-mono text-xs
          w-64 border-r border-white/5 bg-surface-container-low flex flex-col py-6
          transition-all duration-300 z-50 shrink-0
          fixed md:sticky top-0 h-screen
          ${isOpen ? "left-0" : "-left-64 md:left-0"}
        `}
      >
        {/* Header / Brand */}
        <div className="px-6 mb-8 flex flex-col gap-2 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded overflow-hidden bg-primary-container/20 flex items-center justify-center border border-primary-container/40">
                <Sparkles className="w-5 h-5 text-primary-container animate-pulse" />
              </div>
              <span className="font-display text-2xl font-bold text-primary tracking-tight">
                RouteMind
              </span>
            </div>
            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="md:hidden text-text-muted hover:text-on-surface p-1 rounded"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <span className="text-text-muted text-xs font-mono pl-1">
            AI Enterprise Platform
          </span>
        </div>

        {/* Primary Navigation */}
        <nav className="flex-1 px-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-sm
                  ${
                    item.active
                      ? "bg-secondary-container/20 text-primary border-r-2 border-primary shadow-[0_0_15px_rgba(0,229,255,0.1)] font-semibold"
                      : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                  }
                `}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions & Support */}
        <div className="px-4 mt-auto space-y-3 pt-4 border-t border-white/5">
          <button
            onClick={onNewOptimization}
            className="w-full bg-primary-container text-on-primary-fixed py-2.5 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:bg-primary-fixed-dim transition-all active:scale-98"
          >
            <Plus className="w-4 h-4" />
            <span>New Optimization</span>
          </button>

          <div className="space-y-1">
            <a
              href="#"
              className="text-on-surface-variant flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 hover:text-on-surface transition-all text-sm"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
            </a>
            <a
              href="#"
              className="text-on-surface-variant flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 hover:text-on-surface transition-all text-sm"
            >
              <User className="w-4 h-4" />
              <span>Account Settings</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
