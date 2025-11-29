"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Coins, 
  Gift, 
  ArrowRight, 
  History,
  Check,
  ChevronRight,
  Star,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import {
  GopayLogo,
  OvoLogo,
  ShopeePayLogo,
  DanaLogo,
  PulsaIcon,
  PdamIcon,
  PlnIcon
} from "@/components/icons";

const rewardOptions = [
  { 
    id: "gopay", 
    name: "GoPay", 
    Icon: GopayLogo, 
    color: "from-green-500 to-green-600",
    minPoints: 10000 
  },
  { 
    id: "ovo", 
    name: "OVO", 
    Icon: OvoLogo, 
    color: "from-purple-500 to-purple-600",
    minPoints: 10000 
  },
  { 
    id: "shopeepay", 
    name: "ShopeePay", 
    Icon: ShopeePayLogo, 
    color: "from-orange-500 to-orange-600",
    minPoints: 10000 
  },
  { 
    id: "pulsa", 
    name: "Pulsa", 
    Icon: PulsaIcon, 
    color: "from-blue-500 to-blue-600",
    minPoints: 5000 
  },
  { 
    id: "pdam", 
    name: "Potongan PDAM", 
    Icon: PdamIcon, 
    color: "from-cyan-500 to-cyan-600",
    minPoints: 20000 
  },
  { 
    id: "pln", 
    name: "Token PLN", 
    Icon: PlnIcon, 
    color: "from-yellow-500 to-amber-500",
    minPoints: 20000 
  },
];

const rewardHistory = [
  { date: "28 Nov 2025", type: "GoPay", amount: 50000, status: "success" },
  { date: "21 Nov 2025", type: "Pulsa", amount: 25000, status: "success" },
  { date: "14 Nov 2025", type: "OVO", amount: 75000, status: "success" },
  { date: "7 Nov 2025", type: "PDAM", amount: 100000, status: "success" },
];

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<"redeem" | "history">("redeem");
  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const [redeemAmount, setRedeemAmount] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPoints = 148500;

  const handleRedeem = () => {
    if (selectedReward && redeemAmount) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedReward(null);
        setRedeemAmount(null);
      }, 3000);
    }
  };

  return (
    <div className="mobile-container bg-background pb-24">
      <Header title="Rewards" showBack />
      
      <div className="pt-16">
        {/* Points Balance Card */}
        <div className="px-4 py-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Card className="p-6 gradient-eco text-white border-0 shadow-eco-lg overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute -right-4 bottom-0 w-24 h-24 bg-white/10 rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-5 h-5" />
                  <span className="text-white/80">Total Poin Kamu</span>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-4xl font-bold">{totalPoints.toLocaleString()}</span>
                  <span className="text-white/80">poin</span>
                </motion.div>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-white/80">+12.500 poin bulan ini</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="px-4 mb-4">
          <div className="flex gap-2 p-1 bg-eco-100 rounded-xl">
            <button
              onClick={() => setActiveTab("redeem")}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "redeem"
                  ? "bg-white text-eco-700 shadow-sm"
                  : "text-eco-600"
              }`}
            >
              <Gift className="w-4 h-4 inline mr-2" />
              Tukar Poin
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "history"
                  ? "bg-white text-eco-700 shadow-sm"
                  : "text-eco-600"
              }`}
            >
              <History className="w-4 h-4 inline mr-2" />
              Riwayat
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "redeem" ? (
            <motion.div
              key="redeem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-4 space-y-4"
            >
              {/* Reward Options */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Pilih Reward</h3>
                <div className="grid grid-cols-2 gap-3">
                  {rewardOptions.map((option, index) => (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedReward(option.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        selectedReward === option.id
                          ? "border-eco-500 bg-eco-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-2`}>
                        <option.Icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="font-semibold text-foreground">{option.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Min. {option.minPoints.toLocaleString()} poin
                      </p>
                      {selectedReward === option.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 bg-eco-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              {selectedReward && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <h3 className="font-semibold text-foreground mb-3">Pilih Nominal</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[25000, 50000, 100000].map((amount) => (
                      <motion.button
                        key={amount}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRedeemAmount(amount)}
                        disabled={amount > totalPoints}
                        className={`p-3 rounded-xl border-2 transition-all ${
                          redeemAmount === amount
                            ? "border-eco-500 bg-eco-50"
                            : amount > totalPoints
                            ? "border-gray-100 bg-gray-50 opacity-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <p className="font-bold text-foreground">
                          {(amount / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-muted-foreground">poin</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Redeem Button */}
              {selectedReward && redeemAmount && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Button
                    onClick={handleRedeem}
                    className="w-full h-14 rounded-2xl gradient-eco shadow-eco btn-press text-lg font-semibold"
                  >
                    Tukar {redeemAmount.toLocaleString()} Poin
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Info Card */}
              <Card className="p-4 bg-amber-50 border-amber-200">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800">Tips Hemat</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Tukar poin di atas 100.000 untuk dapat bonus 5% ekstra!
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-4 space-y-3"
            >
              {rewardHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-4 shadow-card border-0 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-eco-100 rounded-xl flex items-center justify-center">
                          {item.type === "GoPay" && <GopayLogo className="w-7 h-7 text-green-600" />}
                          {item.type === "OVO" && <OvoLogo className="w-7 h-7 text-purple-600" />}
                          {item.type === "Pulsa" && <PulsaIcon className="w-7 h-7 text-blue-600" />}
                          {item.type === "PDAM" && <PdamIcon className="w-7 h-7 text-cyan-600" />}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.type}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-eco-600">
                          Rp {item.amount.toLocaleString()}
                        </p>
                        <span className="text-xs bg-eco-100 text-eco-700 px-2 py-0.5 rounded-full">
                          Berhasil
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Load More */}
              <Button variant="outline" className="w-full h-12 rounded-xl">
                Lihat Semua Riwayat
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 text-center max-w-sm w-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-4 bg-eco-100 rounded-full flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-eco-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Penukaran Berhasil!
              </h3>
              <p className="text-muted-foreground mb-4">
                {redeemAmount?.toLocaleString()} poin telah ditukar ke {
                  rewardOptions.find(r => r.id === selectedReward)?.name
                }
              </p>
              <p className="text-sm text-eco-600">
                Saldo akan masuk dalam 1x24 jam
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
