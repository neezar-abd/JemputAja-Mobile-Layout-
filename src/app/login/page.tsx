"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndonesiaFlag } from "@/components/icons";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handlePhoneSubmit = () => {
    if (phone.length >= 10) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
        setCountdown(60);
      }, 1000);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    // Auto-submit when complete
    if (newOtp.every(digit => digit !== "") && index === 5) {
      handleOtpSubmit(newOtp.join(""));
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = (code?: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/home");
    }, 1500);
  };

  const resendOtp = () => {
    if (countdown === 0) {
      setCountdown(60);
      // Pretend to resend OTP
    }
  };

  return (
    <div className="mobile-container bg-background">
      {/* Green header wave */}
      <div className="absolute top-0 left-0 right-0 h-72 gradient-eco overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
            fill="#f8fdf9"
          />
        </svg>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-16 left-8 w-16 h-16 bg-white/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-24 right-12 w-12 h-12 bg-white/15 rounded-full"
        />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-8 min-h-screen">
        <AnimatePresence mode="wait">
          {step === "phone" ? (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-eco flex items-center justify-center"
                >
                  <Phone className="w-10 h-10 text-primary" />
                </motion.div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Masuk dengan Nomor HP
                </h1>
                <p className="text-muted-foreground">
                  Kami akan mengirim kode OTP ke nomor kamu
                </p>
              </div>

              {/* Phone Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground">
                    <IndonesiaFlag className="w-6 h-4 rounded-sm overflow-hidden" />
                    <span className="font-medium">+62</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="812 3456 7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="h-14 pl-24 text-lg rounded-2xl border-2 border-eco-200 focus:border-primary"
                  />
                </div>

                <Button
                  onClick={handlePhoneSubmit}
                  disabled={phone.length < 10 || isLoading}
                  className="w-full h-14 text-lg font-semibold rounded-2xl gradient-eco shadow-eco btn-press disabled:opacity-50"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Kirim Kode OTP
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Security note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <Shield className="w-4 h-4" />
                <span>Data kamu aman & terenkripsi</span>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="otp"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-eco flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Masukkan Kode OTP
                </h1>
                <p className="text-muted-foreground">
                  Kode dikirim ke <span className="font-semibold text-foreground">+62 {phone}</span>
                </p>
              </div>

              {/* OTP Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-center gap-3">
                  {otp.map((digit, index) => (
                    <motion.input
                      key={index}
                      ref={(el) => { otpRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`w-12 h-14 text-center text-2xl font-bold rounded-xl border-2 transition-all
                        ${digit 
                          ? "border-primary bg-eco-50 text-primary" 
                          : "border-eco-200 bg-white"
                        }
                        focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <Button
                  onClick={() => handleOtpSubmit()}
                  disabled={otp.some(d => !d) || isLoading}
                  className="w-full h-14 text-lg font-semibold rounded-2xl gradient-eco shadow-eco btn-press disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                      />
                      <span>Memverifikasi...</span>
                    </div>
                  ) : (
                    <>
                      Verifikasi
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Resend OTP */}
                <div className="text-center">
                  {countdown > 0 ? (
                    <p className="text-muted-foreground">
                      Kirim ulang kode dalam{" "}
                      <span className="font-semibold text-primary">{countdown}s</span>
                    </p>
                  ) : (
                    <button
                      onClick={resendOtp}
                      className="text-primary font-semibold"
                    >
                      Kirim Ulang Kode
                    </button>
                  )}
                </div>

                {/* Change number */}
                <button
                  onClick={() => {
                    setStep("phone");
                    setOtp(["", "", "", "", "", ""]);
                  }}
                  className="w-full text-center text-muted-foreground"
                >
                  Ganti Nomor HP
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Demo hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-xs text-muted-foreground/60">
            Demo: Masukkan nomor apapun & OTP: 123456
          </p>
        </motion.div>
      </div>
    </div>
  );
}
