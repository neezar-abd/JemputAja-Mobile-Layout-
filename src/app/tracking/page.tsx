"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Package,
  Check,
  Navigation,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";

const trackingSteps = [
  { id: "confirmed", label: "Pesanan Dikonfirmasi", time: "08:00", done: true },
  { id: "assigned", label: "Driver Ditugaskan", time: "08:02", done: true },
  { id: "pickup", label: "Driver Menuju Lokasi", time: "08:05", done: true },
  { id: "arrived", label: "Driver Tiba", time: "08:15", done: false },
  { id: "weighing", label: "Penimbangan Sampah", time: "-", done: false },
  { id: "completed", label: "Selesai", time: "-", done: false },
];

export default function TrackingPage() {
  const [eta, setEta] = useState(8);
  const [driverPosition, setDriverPosition] = useState(0);
  const [currentStep, setCurrentStep] = useState(2);

  // Simulate driver movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDriverPosition((prev) => (prev < 100 ? prev + 2 : 0));
      setEta((prev) => (prev > 1 ? prev - 1 : 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate step progress
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < trackingSteps.length - 1 ? prev + 1 : prev));
    }, 10000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="mobile-container bg-background pb-24">
      <Header title="Lacak Driver" showBack />
      
      <div className="pt-16">
        {/* Map Area */}
        <div className="relative h-[45vh] bg-eco-100 overflow-hidden">
          {/* Fake map background */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22c55e" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Road path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            {/* Road */}
            <path
              d="M 50 350 Q 100 300 150 280 Q 200 260 250 200 Q 300 140 350 100"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 50 350 Q 100 300 150 280 Q 200 260 250 200 Q 300 140 350 100"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Dashed center line */}
            <path
              d="M 50 350 Q 100 300 150 280 Q 200 260 250 200 Q 300 140 350 100"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeDasharray="10 10"
              strokeLinecap="round"
            />
          </svg>

          {/* Driver marker (animated) */}
          <motion.div
            animate={{
              left: `${20 + driverPosition * 0.6}%`,
              top: `${75 - driverPosition * 0.5}%`,
            }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute z-20"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 -m-4 bg-eco-500 rounded-full"
              />
              <div className="w-12 h-12 bg-eco-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-xl">🛵</span>
              </div>
            </div>
          </motion.div>

          {/* Destination marker */}
          <div className="absolute right-12 top-16 z-10">
            <div className="relative">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45" />
            </div>
          </div>

          {/* Your location marker */}
          <div className="absolute left-8 bottom-12 z-10">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 -m-2 bg-blue-500 rounded-full opacity-30"
              />
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* ETA Badge */}
          <div className="absolute top-4 left-4 right-4">
            <Card className="p-3 bg-white/95 backdrop-blur shadow-lg border-0 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-eco-100 rounded-xl flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-eco-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Estimasi Tiba</p>
                  <p className="font-bold text-lg text-eco-600">{eta} menit</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Jarak</p>
                <p className="font-semibold text-foreground">1.2 km</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 -mt-6 relative z-10 space-y-4">
          {/* Driver Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Card className="p-4 shadow-eco border-0 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-eco-100 rounded-full flex items-center justify-center text-3xl">
                    👨
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-eco-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground">Pak Budi</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>4.9</span>
                    <span>•</span>
                    <span>B 1234 XYZ</span>
                  </div>
                  <p className="text-xs text-eco-600 mt-1">🛵 Honda Vario 125</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 h-12 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon
                </Button>
                <Button variant="outline" className="flex-1 h-12 rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Tracking Timeline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 shadow-card border-0 bg-white">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-eco-600" />
                Status Penjemputan
              </h3>

              <div className="space-y-1">
                {trackingSteps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isDone = index <= currentStep;

                  return (
                    <div key={step.id} className="flex gap-3">
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          initial={false}
                          animate={{
                            backgroundColor: isDone ? "#22c55e" : "#e5e7eb",
                            scale: isActive ? 1.2 : 1,
                          }}
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            isActive ? "ring-4 ring-eco-200" : ""
                          }`}
                        >
                          {isDone && index < currentStep && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </motion.div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`w-0.5 h-8 ${isDone ? "bg-eco-500" : "bg-gray-200"}`} />
                        )}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 pb-4 ${isActive ? "" : "opacity-60"}`}>
                        <div className="flex items-center justify-between">
                          <p className={`font-medium ${isDone ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </p>
                          <span className="text-xs text-muted-foreground">{step.time}</span>
                        </div>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-sm text-eco-600 mt-1"
                          >
                            Sedang dalam proses...
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Pickup Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 shadow-card border-0 bg-white">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-eco-600" />
                Detail Penjemputan
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Alamat</p>
                    <p className="font-medium text-foreground">Jl. Rungkut Asri Tengah No. 15</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Jadwal</p>
                    <p className="font-medium text-foreground">Selasa, 3 Des • 08:00 - 10:00</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-lg">🥤 Plastik</span>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg">📦 Kertas</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-lg">🥬 Organik</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
