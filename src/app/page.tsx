"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Recycle, Leaf, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: Recycle,
    title: "Sampah Jadi Berkah",
    description: "Ubah sampah rumah tanggamu menjadi poin yang bisa ditukar dengan saldo e-wallet",
    color: "from-eco-500 to-eco-600",
    bgColor: "bg-eco-50",
  },
  {
    icon: Leaf,
    title: "Selamatkan Bumi",
    description: "Setiap kg sampah yang kamu pilah membantu mengurangi polusi dan melestarikan lingkungan",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Coins,
    title: "Dapat Reward",
    description: "Kumpulkan poin dari setiap penjemputan dan tukar dengan GoPay, OVO, atau potongan PDAM",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push("/login");
    }
  };

  const skipToLogin = () => {
    router.push("/login");
  };

  // Splash Screen
  if (showSplash) {
    return (
      <div className="mobile-container gradient-eco flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration: 0.8 
          }}
          className="relative"
        >
          {/* Animated rings */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 -m-8 rounded-full border-4 border-white/30"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 -m-16 rounded-full border-4 border-white/20"
          />
          
          {/* Logo container */}
          <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Recycle className="w-16 h-16 text-eco-600" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            JemputAja!
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Sampah dijemput, reward didapat
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-2 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          ))}
        </motion.div>
      </div>
    );
  }

  // Onboarding Slides
  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className={`mobile-container ${slide.bgColor} transition-colors duration-500`}>
      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={skipToLogin}
        className="absolute top-12 right-6 text-muted-foreground font-medium z-10"
      >
        Lewati
      </motion.button>

      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
        {/* Illustration */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative mb-12"
          >
            {/* Background circle */}
            <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${slide.color} opacity-20`} />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${slide.color} shadow-xl flex items-center justify-center`}
              >
                <Icon className="w-14 h-14 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {slide.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs mx-auto">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-primary/30"
              }`}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 w-full"
        >
          <Button
            onClick={nextSlide}
            className="w-full h-14 text-lg font-semibold rounded-2xl gradient-eco shadow-eco btn-press"
          >
            {currentSlide === slides.length - 1 ? "Mulai Sekarang" : "Lanjut"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
