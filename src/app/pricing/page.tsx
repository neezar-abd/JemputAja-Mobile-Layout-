"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown,
  Truck,
  Calendar,
  Scale,
  TrendingUp,
  Droplets,
  Gift,
  ChevronRight,
  Sparkles,
  Users,
  BadgePercent
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";

const pricingTiers = [
  {
    id: "free",
    name: "Gratis",
    subtitle: "Freemium",
    price: 0,
    priceLabel: "Rp 0",
    perDay: "Selamanya gratis",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    textColor: "text-gray-700",
    icon: Gift,
    popular: false,
    wtp: 93,
    features: [
      { text: "Penjemputan 2x/bulan", included: true },
      { text: "Maks 10 kg anorganik", included: true },
      { text: "Poin reward normal (Rp 2.500–4.000/kg)", included: true },
      { text: "Jadwal tetap sesuai zona", included: true },
      { text: "Bebas pilih jadwal", included: false },
      { text: "Prioritas jemput", included: false },
      { text: "Laporan CO₂ bulanan", included: false },
      { text: "Jemput sampah besar", included: false },
    ],
    cta: "Paket Saat Ini",
    ctaVariant: "outline" as const,
  },
  {
    id: "regular",
    name: "Reguler",
    subtitle: "Sweet Spot ⭐",
    price: 29000,
    priceLabel: "Rp 29.000",
    perDay: "~Rp 950/hari",
    color: "from-eco-500 to-eco-600",
    bgColor: "bg-eco-50",
    borderColor: "border-eco-300",
    textColor: "text-eco-700",
    icon: Zap,
    popular: true,
    wtp: 67,
    features: [
      { text: "Penjemputan 4x/bulan", included: true },
      { text: "Maks 30 kg/bulan", included: true },
      { text: "Reward naik 25% (Rp 3.500–5.500/kg)", included: true, highlight: true },
      { text: "Bebas pilih jadwal via app", included: true },
      { text: "Prioritas jemput <48 jam", included: true, highlight: true },
      { text: "Laporan CO₂ bulanan", included: true },
      { text: "Jemput sampah besar", included: false },
      { text: "Diskon PDAM/PLN", included: false },
    ],
    cta: "Upgrade Sekarang",
    ctaVariant: "default" as const,
    savings: "Hemat ~Rp 18.000/bulan dari reward tambahan!",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Zero Waste Hero",
    price: 69000,
    priceLabel: "Rp 69.000",
    perDay: "~Rp 2.300/hari",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    textColor: "text-amber-700",
    icon: Crown,
    popular: false,
    wtp: 27,
    features: [
      { text: "Penjemputan UNLIMITED", included: true, highlight: true },
      { text: "Maks 100 kg/bulan", included: true },
      { text: "Reward naik 50% (Rp 4.500–7.000/kg)", included: true, highlight: true },
      { text: "Bebas pilih jadwal via app", included: true },
      { text: "Prioritas jemput <24 jam", included: true },
      { text: "Laporan CO₂ bulanan", included: true },
      { text: "Jemput sampah besar 2x/bulan GRATIS", included: true, highlight: true },
      { text: "Diskon tagihan PDAM/PLN via poin", included: true, highlight: true },
    ],
    cta: "Jadi Premium",
    ctaVariant: "default" as const,
    savings: "Nilai total ~Rp 114.000/bulan!",
  },
];

const launchPromo = {
  title: "🎉 Promo Launching!",
  description: "3 Bulan Pertama GRATIS untuk Semua Tier!",
  endDate: "31 Maret 2026",
};

const stats = [
  { value: "93%", label: "Warga mau pakai tier Gratis" },
  { value: "67%", label: "Tertarik upgrade ke Reguler" },
  { value: "15", label: "Riset interview langsung" },
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="mobile-container bg-gradient-to-b from-eco-50 to-background pb-24">
      <Header title="Pilih Paket" showBack />
      
      <div className="pt-16">
        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4"
        >
          <Card className="p-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">{launchPromo.title}</span>
              </div>
              <p className="text-lg font-bold">{launchPromo.description}</p>
              <p className="text-white/80 text-sm mt-1">
                Berlaku hingga {launchPromo.endDate}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-around py-6 px-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-eco-600">{stat.value}</p>
              <p className="text-xs text-muted-foreground max-w-[80px]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="px-4 space-y-4">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card 
                  className={`relative overflow-hidden border-2 ${
                    tier.popular 
                      ? "border-eco-400 shadow-eco-lg" 
                      : tier.borderColor
                  } ${selectedTier === tier.id ? "ring-2 ring-eco-500" : ""}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-eco-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                        PALING POPULER
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{tier.name}</h3>
                          <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">{tier.priceLabel}</p>
                        <p className="text-xs text-muted-foreground">{tier.perDay}</p>
                      </div>
                    </div>

                    {/* WTP Indicator */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Tingkat minat warga</span>
                        <span className={`font-semibold ${tier.textColor}`}>{tier.wtp}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tier.wtp}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${tier.color} rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {tier.features.slice(0, 4).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          {feature.included ? (
                            <div className={`w-5 h-5 rounded-full ${tier.bgColor} flex items-center justify-center`}>
                              <Check className={`w-3 h-3 ${tier.textColor}`} />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <X className="w-3 h-3 text-gray-400" />
                            </div>
                          )}
                          <span className={`text-sm ${
                            feature.included 
                              ? feature.highlight 
                                ? `font-semibold ${tier.textColor}` 
                                : "text-foreground"
                              : "text-muted-foreground line-through"
                          }`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Show More Features */}
                    <AnimatePresence>
                      {selectedTier === tier.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 mb-4"
                        >
                          {tier.features.slice(4).map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-2">
                              {feature.included ? (
                                <div className={`w-5 h-5 rounded-full ${tier.bgColor} flex items-center justify-center`}>
                                  <Check className={`w-3 h-3 ${tier.textColor}`} />
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                  <X className="w-3 h-3 text-gray-400" />
                                </div>
                              )}
                              <span className={`text-sm ${
                                feature.included 
                                  ? feature.highlight 
                                    ? `font-semibold ${tier.textColor}` 
                                    : "text-foreground"
                                  : "text-muted-foreground line-through"
                              }`}>
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Savings Badge */}
                    {tier.savings && (
                      <div className={`${tier.bgColor} ${tier.textColor} text-sm p-2 rounded-lg mb-4 flex items-center gap-2`}>
                        <BadgePercent className="w-4 h-4" />
                        {tier.savings}
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      variant={tier.ctaVariant}
                      className={`w-full h-12 rounded-xl font-semibold ${
                        tier.popular 
                          ? "gradient-eco shadow-eco text-white" 
                          : tier.id === "premium"
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                          : ""
                      }`}
                    >
                      {tier.cta}
                      {tier.id !== "free" && <ChevronRight className="w-4 h-4 ml-1" />}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="px-4 mt-6"
        >
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="w-full py-3 text-center text-eco-600 font-medium flex items-center justify-center gap-2"
          >
            {showComparison ? "Sembunyikan" : "Lihat"} Perbandingan Lengkap
            <ChevronRight className={`w-4 h-4 transition-transform ${showComparison ? "rotate-90" : ""}`} />
          </button>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Card className="p-4 mt-2 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-muted-foreground">Fitur</th>
                        <th className="text-center py-2 font-medium">Gratis</th>
                        <th className="text-center py-2 font-medium text-eco-600">Reguler</th>
                        <th className="text-center py-2 font-medium text-amber-600">Premium</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-2">Penjemputan/bulan</td>
                        <td className="text-center">2x</td>
                        <td className="text-center text-eco-600 font-medium">4x</td>
                        <td className="text-center text-amber-600 font-medium">∞</td>
                      </tr>
                      <tr>
                        <td className="py-2">Kuota/bulan</td>
                        <td className="text-center">10 kg</td>
                        <td className="text-center text-eco-600 font-medium">30 kg</td>
                        <td className="text-center text-amber-600 font-medium">100 kg</td>
                      </tr>
                      <tr>
                        <td className="py-2">Reward/kg</td>
                        <td className="text-center">Rp 2.500–4.000</td>
                        <td className="text-center text-eco-600 font-medium">+25%</td>
                        <td className="text-center text-amber-600 font-medium">+50%</td>
                      </tr>
                      <tr>
                        <td className="py-2">Prioritas jemput</td>
                        <td className="text-center"><X className="w-4 h-4 mx-auto text-gray-300" /></td>
                        <td className="text-center"><Check className="w-4 h-4 mx-auto text-eco-500" /></td>
                        <td className="text-center"><Check className="w-4 h-4 mx-auto text-amber-500" /></td>
                      </tr>
                      <tr>
                        <td className="py-2">Jemput sampah besar</td>
                        <td className="text-center"><X className="w-4 h-4 mx-auto text-gray-300" /></td>
                        <td className="text-center"><X className="w-4 h-4 mx-auto text-gray-300" /></td>
                        <td className="text-center text-amber-600 font-medium">2x/bln</td>
                      </tr>
                      <tr>
                        <td className="py-2">Diskon PDAM/PLN</td>
                        <td className="text-center"><X className="w-4 h-4 mx-auto text-gray-300" /></td>
                        <td className="text-center"><X className="w-4 h-4 mx-auto text-gray-300" /></td>
                        <td className="text-center"><Check className="w-4 h-4 mx-auto text-amber-500" /></td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Research Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="px-4 mt-6"
        >
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-blue-800 text-sm">Berdasarkan Riset Langsung</p>
                <p className="text-xs text-blue-700 mt-1">
                  Harga ini ditentukan dari interview 15 warga Surabaya menggunakan metode MOM Test. 
                  67% responden bersedia bayar Rp 29.000/bulan karena nilai reward hampir menutupi biaya langganan.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="px-4 mt-6 mb-8"
        >
          <h3 className="font-semibold text-foreground mb-3">Pertanyaan Umum</h3>
          <div className="space-y-2">
            {[
              { q: "Kapan mulai bayar?", a: "Setelah 3 bulan pertama (gratis)" },
              { q: "Bisa downgrade?", a: "Bisa kapan saja tanpa penalti" },
              { q: "Reward masuk kemana?", a: "Bisa ke GoPay, OVO, atau potong tagihan" },
            ].map((faq, index) => (
              <Card key={index} className="p-3">
                <p className="font-medium text-sm text-foreground">{faq.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
