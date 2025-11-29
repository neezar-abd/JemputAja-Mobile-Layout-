"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Check, 
  ChevronRight,
  Home,
  Building2,
  Truck,
  Package,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";

const steps = ["Lokasi", "Jadwal", "Detail", "Konfirmasi"];

const timeSlots = [
  { id: "morning", label: "Pagi", time: "07:00 - 10:00", icon: "🌅" },
  { id: "noon", label: "Siang", time: "10:00 - 13:00", icon: "☀️" },
  { id: "afternoon", label: "Sore", time: "15:00 - 18:00", icon: "🌇" },
];

const wasteTypes = [
  { id: "plastic", label: "Plastik", icon: "🥤", color: "bg-blue-100 border-blue-300" },
  { id: "paper", label: "Kertas", icon: "📦", color: "bg-yellow-100 border-yellow-300" },
  { id: "organic", label: "Organik", icon: "🥬", color: "bg-green-100 border-green-300" },
  { id: "metal", label: "Logam", icon: "🥫", color: "bg-gray-100 border-gray-300" },
  { id: "glass", label: "Kaca", icon: "🫙", color: "bg-purple-100 border-purple-300" },
  { id: "electronic", label: "Elektronik", icon: "📱", color: "bg-red-100 border-red-300" },
];

export default function RequestPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    addressType: "home",
    address: "Jl. Rungkut Asri Tengah No. 15",
    notes: "",
    date: "",
    timeSlot: "",
    wasteTypes: [] as string[],
    estimatedWeight: "5-10",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleWasteType = (id: string) => {
    setFormData(prev => ({
      ...prev,
      wasteTypes: prev.wasteTypes.includes(id)
        ? prev.wasteTypes.filter(t => t !== id)
        : [...prev.wasteTypes, id]
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/tracking");
    }, 2000);
  };

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("id-ID", { weekday: "short" }),
      num: date.getDate(),
      month: date.toLocaleDateString("id-ID", { month: "short" }),
    };
  });

  return (
    <div className="mobile-container bg-background pb-24">
      <Header title="Jemput Sampah" showBack />
      
      <div className="pt-20 px-4">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: index <= currentStep ? "#22c55e" : "#e5e7eb",
                    scale: index === currentStep ? 1.1 : 1,
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                >
                  {index < currentStep ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <span className={index <= currentStep ? "text-white" : "text-gray-500"}>
                      {index + 1}
                    </span>
                  )}
                </motion.div>
                <span className={`text-xs mt-1 ${index <= currentStep ? "text-eco-600 font-medium" : "text-muted-foreground"}`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 mx-1 ${index < currentStep ? "bg-eco-500" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Location */}
          {currentStep === 0 && (
            <motion.div
              key="location"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">Pilih Lokasi Penjemputan</h2>
              
              {/* Address Type */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "home", icon: Home, label: "Rumah" },
                  { id: "office", icon: Building2, label: "Kantor" },
                ].map((type) => {
                  const Icon = type.icon;
                  return (
                    <motion.button
                      key={type.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData(prev => ({ ...prev, addressType: type.id }))}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        formData.addressType === type.id
                          ? "border-eco-500 bg-eco-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${
                        formData.addressType === type.id ? "text-eco-600" : "text-gray-400"
                      }`} />
                      <span className={`font-medium ${
                        formData.addressType === type.id ? "text-eco-700" : "text-gray-600"
                      }`}>
                        {type.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Address Input */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Alamat Lengkap</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="pl-12 h-14 rounded-2xl border-2"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>
              </div>

              {/* Map Preview (Static) */}
              <Card className="aspect-video rounded-2xl overflow-hidden bg-eco-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-eco-600 mx-auto mb-2" />
                    <p className="text-sm text-eco-700">Rungkut, Surabaya</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Button variant="secondary" className="w-full rounded-xl">
                    <MapPin className="w-4 h-4 mr-2" />
                    Pilih dari Peta
                  </Button>
                </div>
              </Card>

              {/* Notes */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Catatan untuk Driver (Opsional)</label>
                <Input
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="h-14 rounded-2xl border-2"
                  placeholder="Contoh: Rumah warna hijau, pagar hitam"
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Schedule */}
          {currentStep === 1 && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground">Pilih Jadwal</h2>
              
              {/* Date Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Tanggal Penjemputan
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
                  {dates.map((d) => (
                    <motion.button
                      key={d.date}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData(prev => ({ ...prev, date: d.date }))}
                      className={`flex-shrink-0 w-16 py-3 rounded-2xl border-2 transition-all ${
                        formData.date === d.date
                          ? "border-eco-500 bg-eco-500 text-white"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p className={`text-xs ${formData.date === d.date ? "text-white/80" : "text-muted-foreground"}`}>
                        {d.day}
                      </p>
                      <p className="text-xl font-bold">{d.num}</p>
                      <p className={`text-xs ${formData.date === d.date ? "text-white/80" : "text-muted-foreground"}`}>
                        {d.month}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Waktu Penjemputan
                </label>
                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <motion.button
                      key={slot.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot.id }))}
                      className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        formData.timeSlot === slot.id
                          ? "border-eco-500 bg-eco-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{slot.icon}</span>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{slot.label}</p>
                          <p className="text-sm text-muted-foreground">{slot.time}</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formData.timeSlot === slot.id
                          ? "border-eco-500 bg-eco-500"
                          : "border-gray-300"
                      }`}>
                        {formData.timeSlot === slot.id && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Waste Details */}
          {currentStep === 2 && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground">Jenis Sampah</h2>
              
              {/* Waste Type Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Pilih jenis sampah yang akan dijemput
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {wasteTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleWasteType(type.id)}
                      className={`p-3 rounded-2xl border-2 transition-all ${
                        formData.wasteTypes.includes(type.id)
                          ? type.color + " border-eco-500"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{type.icon}</span>
                      <span className="text-xs font-medium">{type.label}</span>
                      {formData.wasteTypes.includes(type.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-eco-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Estimated Weight */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Estimasi Berat</label>
                <div className="grid grid-cols-3 gap-3">
                  {["1-5", "5-10", "10+"].map((weight) => (
                    <motion.button
                      key={weight}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData(prev => ({ ...prev, estimatedWeight: weight }))}
                      className={`p-3 rounded-2xl border-2 transition-all ${
                        formData.estimatedWeight === weight
                          ? "border-eco-500 bg-eco-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p className="text-lg font-bold text-foreground">{weight}</p>
                      <p className="text-xs text-muted-foreground">kilogram</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Estimated Reward */}
              <Card className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-800">Estimasi Reward</p>
                    <p className="text-xl font-bold text-amber-900">Rp 25.000 - 50.000</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 3 && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-foreground">Konfirmasi Pesanan</h2>
              
              <Card className="p-4 space-y-4 border-0 shadow-card">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-eco-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-eco-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium text-foreground">{formData.address}</p>
                    {formData.notes && (
                      <p className="text-sm text-muted-foreground mt-1">{formData.notes}</p>
                    )}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Schedule */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jadwal</p>
                    <p className="font-medium text-foreground">
                      {formData.date && new Date(formData.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long"
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {timeSlots.find(s => s.id === formData.timeSlot)?.time}
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Waste Types */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jenis Sampah</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.wasteTypes.map((typeId) => {
                        const type = wasteTypes.find(t => t.id === typeId);
                        return type && (
                          <span key={typeId} className="text-sm bg-eco-100 text-eco-700 px-2 py-1 rounded-lg">
                            {type.icon} {type.label}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Estimasi: {formData.estimatedWeight} kg
                    </p>
                  </div>
                </div>
              </Card>

              {/* Driver Assignment */}
              <Card className="p-4 bg-eco-50 border-eco-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-eco-500 rounded-full flex items-center justify-center text-2xl">
                    👨
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-eco-700">Driver akan ditugaskan</p>
                    <p className="font-semibold text-eco-800">Pak Budi • ⭐ 4.9</p>
                  </div>
                  <Truck className="w-6 h-6 text-eco-600" />
                </div>
              </Card>

              {/* Total */}
              <Card className="p-4 bg-gradient-to-r from-eco-500 to-eco-600 text-white border-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">Estimasi Reward</p>
                    <p className="text-2xl font-bold">Rp 25.000 - 50.000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm">Biaya</p>
                    <p className="text-xl font-bold">GRATIS</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 bg-gradient-to-t from-background via-background to-transparent pt-8">
          <div className="max-w-[430px] mx-auto flex gap-3">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={prevStep}
                className="flex-1 h-14 rounded-2xl border-2"
              >
                Kembali
              </Button>
            )}
            <Button
              onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              className="flex-1 h-14 rounded-2xl gradient-eco shadow-eco btn-press disabled:opacity-70"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                />
              ) : currentStep === steps.length - 1 ? (
                <>Konfirmasi Pesanan</>
              ) : (
                <>
                  Lanjut
                  <ChevronRight className="w-5 h-5 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
