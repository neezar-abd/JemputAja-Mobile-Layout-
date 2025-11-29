"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Camera, 
  Truck, 
  TreePine, 
  Droplets, 
  Coins,
  ChevronRight,
  Bell,
  MapPin,
  Calendar,
  Recycle,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { 
  PlasticIcon, 
  PaperIcon, 
  OrganicIcon,
  UserAvatarIcon,
  DriverAvatarIcon,
  StarBadgeIcon,
  WaveHandIcon
} from "@/components/icons";

export default function HomePage() {
  return (
    <div className="mobile-container bg-background pb-24">
      {/* Header with gradient */}
      <div className="gradient-eco pt-12 pb-20 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-8 w-16 h-16 bg-white/10 rounded-2xl rotate-12"
        />

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div>
            <p className="text-white/80 text-sm flex items-center gap-1">
              Selamat pagi <WaveHandIcon className="w-4 h-4 inline" />
            </p>
            <h1 className="text-2xl font-bold text-white">Ibu Sarah</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative p-3 bg-white/20 rounded-full"
          >
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </motion.button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-white/90 relative z-10">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Zona Surabaya Timur - Rungkut</span>
        </div>
      </div>

      {/* Main content - overlapping cards */}
      <div className="px-4 -mt-12 relative z-10 space-y-4">
        {/* Impact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-5 shadow-eco border-0 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-eco-100 flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-eco-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Kontribusi</p>
                  <p className="font-bold text-foreground">Bulan November</p>
                </div>
              </div>
              <Link href="/profile" className="text-primary text-sm font-medium flex items-center">
                Detail <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-eco-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-10 h-10 mx-auto mb-2 bg-eco-500 rounded-full flex items-center justify-center"
                >
                  <TreePine className="w-5 h-5 text-white" />
                </motion.div>
                <p className="text-xl font-bold text-eco-700">12</p>
                <p className="text-xs text-muted-foreground">Pohon Terselamatkan</p>
              </div>

              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-10 h-10 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <Droplets className="w-5 h-5 text-white" />
                </motion.div>
                <p className="text-xl font-bold text-blue-700">57</p>
                <p className="text-xs text-muted-foreground">kg CO₂ Berkurang</p>
              </div>

              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="w-10 h-10 mx-auto mb-2 bg-amber-500 rounded-full flex items-center justify-center"
                >
                  <Coins className="w-5 h-5 text-white" />
                </motion.div>
                <p className="text-xl font-bold text-amber-700">148K</p>
                <p className="text-xs text-muted-foreground">Poin Terkumpul</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          <Link href="/scan">
            <Card className="p-4 shadow-card border-0 bg-white card-hover cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-3">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">Scan Sampah</h3>
              <p className="text-xs text-muted-foreground mt-1">AI bantu pilah sampahmu</p>
            </Card>
          </Link>

          <Link href="/request">
            <Card className="p-4 shadow-card border-0 bg-white card-hover cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">Jemput Sampah</h3>
              <p className="text-xs text-muted-foreground mt-1">Pesan penjemputan sekarang</p>
            </Card>
          </Link>
        </motion.div>

        {/* Scheduled Pickup Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 shadow-card border-0 bg-gradient-to-r from-eco-500 to-eco-600 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Jadwal Jemput Berikutnya</p>
                  <p className="font-bold text-lg">Selasa, 3 Des • 08:00</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-white/60" />
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Driver: Pak Budi</span>
                <Link href="/tracking" className="font-medium flex items-center gap-1">
                  Lacak <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Tips Pilah Sampah</h2>
            <button className="text-primary text-sm font-medium">Lihat Semua</button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {[
              { color: "bg-blue-500", title: "Karung Biru", desc: "Plastik & Botol", Icon: PlasticIcon },
              { color: "bg-yellow-500", title: "Karung Kuning", desc: "Kertas & Kardus", Icon: PaperIcon },
              { color: "bg-green-500", title: "Karung Hijau", desc: "Organik & Sisa Makanan", Icon: OrganicIcon },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="min-w-[140px]"
              >
                <Card className="p-4 shadow-card border-0 bg-white">
                  <div className={`w-10 h-10 ${tip.color} rounded-xl flex items-center justify-center mb-3`}>
                    <tip.Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tip.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4 shadow-card border-0 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h2 className="font-semibold text-foreground">Peringkat RW</h2>
              </div>
              <span className="text-xs bg-eco-100 text-eco-700 px-2 py-1 rounded-full font-medium">
                #3 di RW 05
              </span>
            </div>

            <div className="space-y-3">
              {[
                { rank: 1, name: "Ibu Ani", kg: "89 kg", Avatar: UserAvatarIcon },
                { rank: 2, name: "Pak Heru", kg: "76 kg", Avatar: DriverAvatarIcon },
                { rank: 3, name: "Kamu", kg: "38 kg", Avatar: StarBadgeIcon, isUser: true },
              ].map((item) => (
                <div 
                  key={item.rank}
                  className={`flex items-center gap-3 p-2 rounded-xl ${
                    item.isUser ? "bg-eco-50 border border-eco-200" : ""
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    item.rank === 1 ? "bg-amber-400 text-white" :
                    item.rank === 2 ? "bg-gray-300 text-white" :
                    "bg-amber-600 text-white"
                  }`}>
                    {item.rank}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-eco-100 flex items-center justify-center">
                    <item.Avatar className="w-5 h-5 text-eco-600" />
                  </div>
                  <span className={`flex-1 font-medium ${item.isUser ? "text-eco-700" : "text-foreground"}`}>
                    {item.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.kg}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
