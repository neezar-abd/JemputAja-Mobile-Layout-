"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Package, 
  MapPin, 
  Clock, 
  User,
  Navigation,
  Phone,
  Check,
  Scale,
  Camera,
  ChevronRight,
  LogOut,
  TrendingUp,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  PlasticIcon,
  PaperIcon,
  OrganicIcon,
  MetalIcon,
  DriverAvatarIcon,
  OnlineStatusIcon
} from "@/components/icons";

const pickupList = [
  {
    id: 1,
    user: "Ibu Sarah",
    address: "Jl. Rungkut Asri Tengah No. 15",
    time: "08:00 - 10:00",
    wasteTypes: [
      { Icon: PlasticIcon, name: "Plastik", color: "text-blue-600 bg-blue-50" },
      { Icon: PaperIcon, name: "Kertas", color: "text-yellow-600 bg-yellow-50" }
    ],
    estimatedWeight: "5-10 kg",
    status: "pending",
    distance: "1.2 km",
  },
  {
    id: 2,
    user: "Pak Heru",
    address: "Jl. Rungkut Asri Utara No. 8",
    time: "08:00 - 10:00",
    wasteTypes: [
      { Icon: OrganicIcon, name: "Organik", color: "text-green-600 bg-green-50" },
      { Icon: PlasticIcon, name: "Plastik", color: "text-blue-600 bg-blue-50" }
    ],
    estimatedWeight: "3-5 kg",
    status: "pending",
    distance: "0.8 km",
  },
  {
    id: 3,
    user: "Bu Ani",
    address: "Jl. Rungkut Kidul No. 23",
    time: "08:00 - 10:00",
    wasteTypes: [
      { Icon: PaperIcon, name: "Kertas", color: "text-yellow-600 bg-yellow-50" },
      { Icon: MetalIcon, name: "Logam", color: "text-gray-600 bg-gray-100" }
    ],
    estimatedWeight: "10+ kg",
    status: "pending",
    distance: "2.1 km",
  },
];

export default function DriverPage() {
  const [activeTab, setActiveTab] = useState<"today" | "completed">("today");
  const [selectedPickup, setSelectedPickup] = useState<number | null>(null);
  const [showWeighModal, setShowWeighModal] = useState(false);

  const todayStats = {
    completed: 5,
    remaining: 3,
    totalKg: 42.5,
    earnings: 127500,
  };

  return (
    <div className="mobile-container bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="gradient-eco pt-12 pb-6 px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <DriverAvatarIcon className="w-8 h-8 text-eco-600" />
              </div>
              <div className="text-white">
                <p className="text-white/80 text-sm">Selamat pagi</p>
                <h1 className="font-bold text-lg">Pak Budi</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 px-3 py-1.5 rounded-full text-white text-sm flex items-center gap-1">
                <OnlineStatusIcon className="w-3 h-3" /> Online
              </div>
            </div>
          </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 rounded-xl p-3 text-center text-white">
            <p className="text-2xl font-bold">{todayStats.completed}</p>
            <p className="text-xs text-white/80">Selesai</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center text-white">
            <p className="text-2xl font-bold">{todayStats.remaining}</p>
            <p className="text-xs text-white/80">Tersisa</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center text-white">
            <p className="text-2xl font-bold">{todayStats.totalKg}</p>
            <p className="text-xs text-white/80">kg</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center text-white">
            <p className="text-lg font-bold">{(todayStats.earnings / 1000).toFixed(0)}K</p>
            <p className="text-xs text-white/80">Rupiah</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-4">
        <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm">
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "today"
                ? "bg-eco-500 text-white"
                : "text-gray-600"
            }`}
          >
            <Package className="w-4 h-4" />
            Hari Ini ({pickupList.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "completed"
                ? "bg-eco-500 text-white"
                : "text-gray-600"
            }`}
          >
            <Check className="w-4 h-4" />
            Selesai (5)
          </button>
        </div>
      </div>

      {/* Pickup List */}
      <div className="px-4 space-y-3 pb-24">
        <AnimatePresence>
          {pickupList.map((pickup, index) => (
            <motion.div
              key={pickup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`p-4 shadow-sm border-0 bg-white cursor-pointer transition-all ${
                  selectedPickup === pickup.id ? "ring-2 ring-eco-500" : ""
                }`}
                onClick={() => setSelectedPickup(
                  selectedPickup === pickup.id ? null : pickup.id
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-eco-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{pickup.user}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {pickup.distance}
                      </p>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">
                    Menunggu
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-foreground">{pickup.address}</p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pickup.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Scale className="w-3 h-3" />
                      {pickup.estimatedWeight}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pickup.wasteTypes.map((waste) => (
                      <span key={waste.name} className={`${waste.color} text-xs px-2 py-1 rounded-lg flex items-center gap-1`}>
                        <waste.Icon className="w-3 h-3" />
                        {waste.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Actions */}
                <AnimatePresence>
                  {selectedPickup === pickup.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <Button variant="outline" className="h-12 rounded-xl">
                          <Phone className="w-4 h-4 mr-2" />
                          Telepon
                        </Button>
                        <Button variant="outline" className="h-12 rounded-xl">
                          <Navigation className="w-4 h-4 mr-2" />
                          Navigasi
                        </Button>
                      </div>
                      <Button 
                        className="w-full h-12 rounded-xl gradient-eco"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowWeighModal(true);
                        }}
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Mulai Penimbangan
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Nav Driver */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-[430px] mx-auto flex items-center justify-around">
          <button className="flex flex-col items-center text-eco-600">
            <Package className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Jemput</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs mt-1">Laporan</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profil</span>
          </button>
        </div>
      </div>

      {/* Weigh Modal */}
      <AnimatePresence>
        {showWeighModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-end"
            onClick={() => setShowWeighModal(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl w-full p-6 max-h-[80vh] overflow-auto"
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
              
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                Penimbangan Sampah
              </h2>

              {/* Weight Display */}
              <Card className="p-6 bg-eco-50 border-eco-200 mb-6 text-center">
                <p className="text-sm text-eco-700 mb-2">Berat Terdeteksi</p>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-5xl font-bold text-eco-600"
                >
                  7.5
                  <span className="text-2xl font-normal ml-1">kg</span>
                </motion.p>
              </Card>

              {/* Weight Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <span className="flex items-center gap-2">
                    <PlasticIcon className="w-5 h-5 text-blue-600" />
                    Plastik
                  </span>
                  <span className="font-semibold">3.2 kg</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                  <span className="flex items-center gap-2">
                    <PaperIcon className="w-5 h-5 text-yellow-600" />
                    Kertas
                  </span>
                  <span className="font-semibold">4.3 kg</span>
                </div>
              </div>

              {/* Reward Calculation */}
              <Card className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-amber-800">Reward untuk User</span>
                  <span className="text-xl font-bold text-amber-600">Rp 37.500</span>
                </div>
              </Card>

              {/* Photo Upload */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-2">Foto Bukti Timbangan</p>
                <button className="w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-muted-foreground hover:bg-gray-50 transition-colors">
                  <Camera className="w-8 h-8 mb-2" />
                  <span>Ambil Foto</span>
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-14 rounded-2xl"
                  onClick={() => setShowWeighModal(false)}
                >
                  Batal
                </Button>
                <Button
                  className="flex-1 h-14 rounded-2xl gradient-eco"
                  onClick={() => {
                    setShowWeighModal(false);
                    // Show success and move to next
                  }}
                >
                  <Check className="w-5 h-5 mr-2" />
                  Selesai
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
