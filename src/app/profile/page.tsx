"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Settings, 
  Bell, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  MapPin,
  Calendar,
  TreePine,
  Droplets,
  Recycle,
  Award,
  Share2,
  Shield,
  FileText,
  Star,
  Crown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import {
  UserAvatarIcon,
  SeedlingBadge,
  RecycleBadge,
  TrophyBadge,
  EarthBadge,
  CrownBadge,
  MedalIcon,
  GiftIcon
} from "@/components/icons";

const impactStats = [
  { 
    icon: Recycle, 
    label: "Total Sampah", 
    value: "127.5", 
    unit: "kg",
    color: "bg-eco-500",
    bgColor: "bg-eco-50"
  },
  { 
    icon: TreePine, 
    label: "Pohon Diselamatkan", 
    value: "42", 
    unit: "pohon",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50"
  },
  { 
    icon: Droplets, 
    label: "CO₂ Dikurangi", 
    value: "186", 
    unit: "kg",
    color: "bg-blue-500",
    bgColor: "bg-blue-50"
  },
  { 
    icon: Award, 
    label: "Total Reward", 
    value: "485", 
    unit: "ribu",
    color: "bg-amber-500",
    bgColor: "bg-amber-50"
  },
];

const menuItems = [
  { icon: Crown, label: "Upgrade Paket", href: "/pricing", highlight: true, isPremium: true },
  { icon: MapPin, label: "Alamat Tersimpan", href: "#" },
  { icon: Calendar, label: "Jadwal Rutin", href: "#" },
  { icon: Bell, label: "Notifikasi", href: "#", badge: 3 },
  { icon: Share2, label: "Ajak Teman", href: "#" },
  { icon: HelpCircle, label: "Bantuan", href: "#" },
  { icon: Shield, label: "Keamanan", href: "#" },
  { icon: FileText, label: "Syarat & Ketentuan", href: "#" },
  { icon: Settings, label: "Pengaturan", href: "#" },
];

const achievements = [
  { Icon: SeedlingBadge, label: "Pemula Hijau", unlocked: true },
  { Icon: RecycleBadge, label: "Recycler Pro", unlocked: true },
  { Icon: TrophyBadge, label: "Eco Warrior", unlocked: true },
  { Icon: EarthBadge, label: "Planet Saver", unlocked: false },
  { Icon: CrownBadge, label: "Legend", unlocked: false },
];

export default function ProfilePage() {
  return (
    <div className="mobile-container bg-background pb-24">
      <Header title="Profil" showMenu />
      
      <div className="pt-16">
        {/* Profile Header */}
        <div className="gradient-eco pt-8 pb-20 px-6 relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
          />
          
          <div className="relative z-10 flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="relative"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <UserAvatarIcon className="w-12 h-12 text-eco-600" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-eco-400 rounded-full flex items-center justify-center border-2 border-white">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
            </motion.div>
            
            <div className="flex-1 text-white">
              <h1 className="text-xl font-bold">Ibu Sarah Wijaya</h1>
              <p className="text-white/80 text-sm">+62 812 3456 7890</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                  <MedalIcon className="w-3 h-3" /> Eco Warrior
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  RW 05
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 -mt-12 relative z-10 space-y-4">
          {/* Impact Summary Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Card className="p-4 shadow-eco border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Dampak Positifmu</h2>
                <span className="text-xs text-muted-foreground">Sejak bergabung</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {impactStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${stat.bgColor} p-3 rounded-xl`}
                    >
                      <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xl font-bold text-foreground">
                        {stat.value}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          {stat.unit}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 shadow-card border-0 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Pencapaian</h2>
                <button className="text-sm text-primary font-medium">Lihat Semua</button>
              </div>

              <div className="flex justify-between">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-1 ${
                      achievement.unlocked 
                        ? "bg-gradient-to-br from-amber-100 to-amber-200" 
                        : "bg-gray-100 grayscale opacity-40"
                    }`}>
                      <achievement.Icon className={`w-6 h-6 ${achievement.unlocked ? "text-amber-600" : "text-gray-400"}`} />
                    </div>
                    <p className={`text-[10px] ${
                      achievement.unlocked ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {achievement.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Referral Banner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0 overflow-hidden relative">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <GiftIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Ajak Tetangga, Dapat Bonus!</p>
                    <p className="text-sm text-white/80">
                      Ajak 5 tetangga → Gratis 1 bulan Premium
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="bg-white/20 px-3 py-1.5 rounded-lg">
                    <p className="text-xs text-white/80">Kode Referral</p>
                    <p className="font-bold">SARAH2024</p>
                  </div>
                  <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90">
                    Bagikan
                    <Share2 className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Menu List */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="divide-y divide-gray-100 shadow-card border-0 bg-white overflow-hidden">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isPremiumItem = 'isPremium' in item && item.isPremium;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between p-4 ${
                      isPremiumItem ? "bg-gradient-to-r from-amber-50 to-orange-50" :
                      item.highlight ? "bg-eco-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isPremiumItem ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white" :
                        item.highlight ? "bg-eco-500 text-white" : "bg-gray-100 text-gray-600"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`font-medium ${
                          isPremiumItem ? "text-amber-700" :
                          item.highlight ? "text-eco-700" : "text-foreground"
                        }`}>
                          {item.label}
                        </span>
                        {isPremiumItem && (
                          <p className="text-xs text-amber-600">3 bulan pertama GRATIS!</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className={`w-5 h-5 ${isPremiumItem ? "text-amber-400" : "text-gray-400"}`} />
                    </div>
                  </Link>
                );
              })}
            </Card>
          </motion.div>

          {/* Logout Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="w-full h-14 rounded-2xl border-2 border-red-200 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Keluar
            </Button>
          </motion.div>

          {/* Version */}
          <p className="text-center text-xs text-muted-foreground py-4">
            JemputAja! v1.0.0 • Made with love in Surabaya
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
