"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Home, 
  Camera, 
  Truck, 
  Gift, 
  User 
} from "lucide-react";

const navItems = [
  { href: "/home", icon: Home, label: "Beranda" },
  { href: "/scan", icon: Camera, label: "Scan" },
  { href: "/request", icon: Truck, label: "Jemput" },
  { href: "/rewards", icon: Gift, label: "Reward" },
  { href: "/profile", icon: User, label: "Profil" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-[430px] mx-auto">
        <div className="glass border-t border-eco-200 bottom-nav">
          <div className="flex items-center justify-around px-2 pt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center justify-center py-2 px-3 min-w-[60px]"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -top-1 w-12 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-xl transition-colors ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className={`text-[10px] mt-1 font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
