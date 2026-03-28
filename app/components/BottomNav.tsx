"use client";

import Link from "next/link";

type Tab = "home" | "picks" | "gallery" | "settings";

export default function BottomNav({ active }: { active: Tab }) {
  const tabs = [
    { id: "home" as Tab, href: "/", icon: "home", label: "Home" },
    { id: "picks" as Tab, href: "#", icon: "bookmark", label: "My Picks" },
    { id: "gallery" as Tab, href: "/share", icon: "celebration", label: "Prank Gallery" },
    { id: "settings" as Tab, href: "#", icon: "settings", label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 w-full flex justify-around items-center px-4 pb-6 pt-3 z-50 bg-[#f6f6f6]/90 backdrop-blur-2xl rounded-t-[24px] border-t border-[#acadad]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-all duration-300 hover:bg-[#f0f1f1] ${
              isActive
                ? "text-[#FF5C00] font-bold"
                : "text-[#5a5c5c]"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="font-['Plus_Jakarta_Sans'] font-medium text-[11px] mt-1">
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
