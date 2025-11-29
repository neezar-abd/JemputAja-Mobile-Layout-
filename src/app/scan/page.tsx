"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Upload, 
  Zap, 
  Check, 
  ArrowRight,
  Recycle,
  X,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import {
  PlasticIcon,
  PaperIcon,
  OrganicIcon,
  LightbulbIcon
} from "@/components/icons";

type ScanResult = {
  type: string;
  bagColor: string;
  colorClass: string;
  bgClass: string;
  Icon: React.ComponentType<{ className?: string }>;
  weight: string;
  reward: string;
  tips: string;
};

const mockResults: ScanResult[] = [
  {
    type: "Plastik",
    bagColor: "Biru",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-500",
    Icon: PlasticIcon,
    weight: "~2.5 kg",
    reward: "Rp 12.500",
    tips: "Pastikan botol sudah kosong dan bersih",
  },
  {
    type: "Kertas & Kardus",
    bagColor: "Kuning",
    colorClass: "text-yellow-600",
    bgClass: "bg-yellow-500",
    Icon: PaperIcon,
    weight: "~1.8 kg",
    reward: "Rp 5.400",
    tips: "Lipat kardus agar tidak makan tempat",
  },
  {
    type: "Organik",
    bagColor: "Hijau",
    colorClass: "text-green-600",
    bgClass: "bg-green-500",
    Icon: OrganicIcon,
    weight: "~3.2 kg",
    reward: "Rp 3.200",
    tips: "Bisa dijadikan kompos",
  },
];

export default function ScanPage() {
  const [step, setStep] = useState<"camera" | "scanning" | "result">("camera");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [results, setResults] = useState<ScanResult[]>([]);

  const handleCapture = () => {
    // Simulate image capture
    setSelectedImage("/placeholder-trash.jpg");
    setStep("scanning");
    
    // Simulate AI processing
    setTimeout(() => {
      setResults(mockResults);
      setStep("result");
    }, 2500);
  };

  const resetScan = () => {
    setStep("camera");
    setSelectedImage(null);
    setResults([]);
  };

  return (
    <div className="mobile-container bg-background pb-24">
      <Header title="Scan Sampah" showBack />
      
      <div className="pt-20 px-4">
        <AnimatePresence mode="wait">
          {step === "camera" && (
            <motion.div
              key="camera"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Camera Preview Area */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-[3/4] bg-gray-900 rounded-3xl overflow-hidden"
              >
                {/* Fake camera view */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Arahkan kamera ke sampah</p>
                  </div>
                </div>

                {/* Scan frame overlay */}
                <div className="absolute inset-8">
                  <div className="w-full h-full border-2 border-white/30 rounded-2xl relative">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-eco-400 rounded-tl-lg" />
                    <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-eco-400 rounded-tr-lg" />
                    <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-eco-400 rounded-bl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-eco-400 rounded-br-lg" />
                  </div>
                </div>

                {/* Scanning line animation */}
                <motion.div
                  animate={{ y: [0, 300, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-eco-400 to-transparent"
                  style={{ top: "15%" }}
                />
              </motion.div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-6">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-eco-100 rounded-2xl flex items-center justify-center text-eco-600"
                >
                  <Upload className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCapture}
                  className="w-20 h-20 gradient-eco rounded-full flex items-center justify-center shadow-eco-lg animate-pulse-eco"
                >
                  <Camera className="w-8 h-8 text-white" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-eco-100 rounded-2xl flex items-center justify-center text-eco-600"
                >
                  <Zap className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Instructions */}
              <Card className="p-4 bg-eco-50 border-eco-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-eco-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-eco-800 mb-1">Tips Scan</h3>
                    <p className="text-sm text-eco-700">
                      Letakkan semua sampah dalam satu frame. AI akan mendeteksi jenis sampah dan memberi tahu karung mana yang tepat.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {step === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[70vh]"
            >
              {/* Animated scanning indicator */}
              <div className="relative mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 rounded-full border-4 border-eco-200 border-t-eco-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-20 h-20 bg-eco-100 rounded-full flex items-center justify-center"
                  >
                    <Recycle className="w-10 h-10 text-eco-600" />
                  </motion.div>
                </div>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-semibold text-foreground mb-2"
              >
                AI Sedang Menganalisis...
              </motion.h2>

              <motion.div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 bg-eco-500 rounded-full"
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-2 text-center text-sm text-muted-foreground"
              >
                <p>✓ Mendeteksi objek...</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  ✓ Mengklasifikasi jenis sampah...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  ✓ Menghitung estimasi berat...
                </motion.p>
              </motion.div>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Success header */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 bg-eco-100 rounded-full flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-eco-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-foreground">Analisis Selesai!</h2>
                <p className="text-muted-foreground mt-1">Ditemukan {results.length} jenis sampah</p>
              </motion.div>

              {/* Results */}
              <div className="space-y-3">
                {results.map((result, index) => (
                  <motion.div
                    key={result.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-4 shadow-card border-0 bg-white">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 ${result.bgClass} rounded-2xl flex items-center justify-center shrink-0`}>
                          <result.Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-foreground">{result.type}</h3>
                            <span className={`text-sm font-medium ${result.colorClass}`}>
                              Karung {result.bagColor}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>Est. {result.weight}</span>
                            <span>•</span>
                            <span className="text-eco-600 font-medium">{result.reward}</span>
                          </div>
                          <p className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-lg inline-flex items-center gap-1">
                            <LightbulbIcon className="w-3 h-3 text-amber-500" /> {result.tips}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-4 bg-gradient-to-r from-eco-500 to-eco-600 text-white border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">Total Estimasi Reward</p>
                      <p className="text-2xl font-bold">Rp 21.100</p>
                    </div>
                    <Button 
                      onClick={() => window.location.href = "/request"}
                      className="bg-white text-eco-600 hover:bg-white/90"
                    >
                      Jemput Sekarang
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Scan again button */}
              <Button
                variant="outline"
                onClick={resetScan}
                className="w-full h-12 rounded-xl border-2"
              >
                <Camera className="w-5 h-5 mr-2" />
                Scan Lagi
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BottomNav />
    </div>
  );
}
