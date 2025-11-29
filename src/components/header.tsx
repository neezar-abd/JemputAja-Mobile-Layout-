"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MoreVertical } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  transparent?: boolean;
  light?: boolean;
}

export function Header({ 
  title, 
  showBack = false, 
  showMenu = false,
  transparent = false,
  light = false,
}: HeaderProps) {
  const router = useRouter();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 safe-top ${
        transparent ? "" : "glass border-b border-eco-100"
      }`}
    >
      <div className="max-w-[430px] mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-10">
            {showBack && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => router.back()}
                className={`p-2 rounded-full ${
                  light 
                    ? "bg-white/20 text-white" 
                    : "bg-eco-100 text-eco-700"
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            )}
          </div>
          
          {title && (
            <h1 className={`text-lg font-semibold ${
              light ? "text-white" : "text-foreground"
            }`}>
              {title}
            </h1>
          )}
          
          <div className="w-10 flex justify-end">
            {showMenu && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  light 
                    ? "bg-white/20 text-white" 
                    : "bg-eco-100 text-eco-700"
                }`}
              >
                <MoreVertical className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
