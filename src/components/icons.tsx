import { SVGProps } from "react";

// Waste Type Icons
export function PlasticIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 2H16L18 6H6L8 2Z" fill="currentColor" opacity="0.3"/>
      <path d="M6 6H18V8C18 8 19 9 19 11V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V11C5 9 6 8 6 8V6Z" fill="currentColor"/>
      <path d="M9 12V18M12 10V18M15 12V18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function PaperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4C4 2.9 4.9 2 6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4Z" fill="currentColor"/>
      <path d="M14 2V8H20" fill="currentColor" opacity="0.3"/>
      <path d="M8 12H16M8 16H13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function OrganicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C12 2 4 6 4 12C4 18 8 22 12 22C16 22 20 18 20 12C20 6 12 2 12 2Z" fill="currentColor"/>
      <path d="M12 6V14M9 10C9 10 10.5 12 12 12C13.5 12 15 10 15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function MetalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="currentColor" opacity="0.3"/>
      <path d="M4 5V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V5" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function GlassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 2H18L17 10C17 10 17 14 12 14C7 14 7 10 7 10L6 2Z" fill="currentColor" opacity="0.5"/>
      <path d="M8 14V20H16V14" fill="currentColor"/>
      <path d="M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// E-wallet & Payment Icons
export function GopayLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#00AA13"/>
      <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 32C19.582 32 16 28.418 16 24C16 19.582 19.582 16 24 16C28.418 16 32 19.582 32 24C32 28.418 28.418 32 24 32Z" fill="white"/>
      <path d="M24 18C20.686 18 18 20.686 18 24C18 27.314 20.686 30 24 30C27.314 30 30 27.314 30 24C30 20.686 27.314 18 24 18ZM24 27C22.343 27 21 25.657 21 24C21 22.343 22.343 21 24 21C25.657 21 27 22.343 27 24C27 25.657 25.657 27 24 27Z" fill="white"/>
    </svg>
  );
}

export function OvoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#4C3494"/>
      <path d="M14 24C14 19.582 17.582 16 22 16H26C30.418 16 34 19.582 34 24C34 28.418 30.418 32 26 32H22C17.582 32 14 28.418 14 24Z" fill="white"/>
      <circle cx="20" cy="24" r="3" fill="#4C3494"/>
      <circle cx="28" cy="24" r="3" fill="#4C3494"/>
    </svg>
  );
}

export function ShopeePayLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#EE4D2D"/>
      <path d="M24 12L26.5 16H21.5L24 12Z" fill="white"/>
      <path d="M15 18H33C34.1 18 35 18.9 35 20V34C35 35.1 34.1 36 33 36H15C13.9 36 13 35.1 13 34V20C13 18.9 13.9 18 15 18Z" fill="white"/>
      <path d="M20 24L22 26L28 20" stroke="#EE4D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 30H30" stroke="#EE4D2D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function DanaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#108EE9"/>
      <path d="M14 20C14 17.791 15.791 16 18 16H30C32.209 16 34 17.791 34 20V28C34 30.209 32.209 32 30 32H18C15.791 32 14 30.209 14 28V20Z" fill="white"/>
      <path d="M20 22V26M24 20V28M28 22V26" stroke="#108EE9" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function PulsaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#3B82F6"/>
      <rect x="16" y="10" width="16" height="28" rx="3" fill="white"/>
      <rect x="18" y="14" width="12" height="16" rx="1" fill="#3B82F6" opacity="0.2"/>
      <circle cx="24" cy="34" r="2" fill="#3B82F6"/>
      <path d="M21 18L24 22L27 18M21 22L24 26L27 22" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PdamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#06B6D4"/>
      <path d="M24 12C24 12 16 20 16 26C16 30.418 19.582 34 24 34C28.418 34 32 30.418 32 26C32 20 24 12 24 12Z" fill="white"/>
      <path d="M24 18C24 18 20 22 20 26C20 28.209 21.791 30 24 30C26.209 30 28 28.209 28 26C28 22 24 18 24 18Z" fill="#06B6D4" opacity="0.3"/>
    </svg>
  );
}

export function PlnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#FBBF24"/>
      <path d="M26 12L18 26H23L22 36L30 22H25L26 12Z" fill="white"/>
    </svg>
  );
}

// User Avatar Icons
export function UserAvatarIcon(props: SVGProps<SVGSVGElement> & { variant?: "female" | "male" }) {
  const { variant = "female", ...rest } = props;
  
  if (variant === "male") {
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <circle cx="24" cy="24" r="24" fill="#E0F2FE"/>
        <circle cx="24" cy="18" r="8" fill="#0EA5E9"/>
        <path d="M10 40C10 33.373 15.373 28 22 28H26C32.627 28 38 33.373 38 40V48H10V40Z" fill="#0EA5E9"/>
        <circle cx="24" cy="18" r="6" fill="#FEF3C7"/>
        <path d="M18 14C18 14 20 12 24 12C28 12 30 14 30 14V18C30 18 28 16 24 16C20 16 18 18 18 18V14Z" fill="#78350F"/>
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="24" cy="24" r="24" fill="#FCE7F3"/>
      <circle cx="24" cy="18" r="8" fill="#EC4899"/>
      <path d="M10 40C10 33.373 15.373 28 22 28H26C32.627 28 38 33.373 38 40V48H10V40Z" fill="#EC4899"/>
      <circle cx="24" cy="18" r="6" fill="#FEF3C7"/>
      <path d="M16 16C16 16 18 10 24 10C30 10 32 16 32 16L30 18C30 18 28 14 24 14C20 14 18 18 18 18L16 16Z" fill="#78350F"/>
    </svg>
  );
}

export function DriverAvatarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="24" fill="#DCFCE7"/>
      <circle cx="24" cy="18" r="8" fill="#22C55E"/>
      <path d="M10 40C10 33.373 15.373 28 22 28H26C32.627 28 38 33.373 38 40V48H10V40Z" fill="#22C55E"/>
      <circle cx="24" cy="18" r="6" fill="#FEF3C7"/>
      <ellipse cx="24" cy="12" rx="6" ry="3" fill="#22C55E"/>
      <path d="M18 12H30V14C30 14 28 16 24 16C20 16 18 14 18 14V12Z" fill="#166534"/>
    </svg>
  );
}

// Badge & Achievement Icons  
export function SeedlingBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2"/>
      <path d="M24 34V24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 24C24 24 20 20 20 16C20 12 24 10 24 10C24 10 28 12 28 16C28 20 24 24 24 24Z" fill="#22C55E"/>
      <path d="M24 28C24 28 18 26 16 22C18 24 22 24 24 24C26 24 30 24 32 22C30 26 24 28 24 28Z" fill="#22C55E"/>
    </svg>
  );
}

export function RecycleBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2"/>
      <path d="M16 28L20 20L24 28H16Z" fill="#22C55E"/>
      <path d="M24 28L28 20L32 28H24Z" fill="#22C55E"/>
      <path d="M20 18L24 10L28 18H20Z" fill="#22C55E"/>
      <path d="M18 26L24 32L30 26" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TrophyBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="22" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M16 14H32V22C32 26.418 28.418 30 24 30C19.582 30 16 26.418 16 22V14Z" fill="#F59E0B"/>
      <path d="M16 16H12V20C12 22.209 13.791 24 16 24V16Z" fill="#F59E0B"/>
      <path d="M32 16H36V20C36 22.209 34.209 24 32 24V16Z" fill="#F59E0B"/>
      <path d="M20 30H28V34H20V30Z" fill="#F59E0B"/>
      <path d="M18 34H30V36H18V34Z" fill="#F59E0B"/>
    </svg>
  );
}

export function EarthBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="22" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="24" cy="24" r="12" fill="#3B82F6"/>
      <path d="M18 20C20 18 22 20 24 18C26 16 28 18 30 20C30 24 28 28 24 28C20 28 18 24 18 20Z" fill="#22C55E"/>
      <path d="M16 26C18 28 22 30 24 28" stroke="#22C55E" strokeWidth="2"/>
    </svg>
  );
}

export function CrownBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="22" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M12 28L16 16L24 22L32 16L36 28H12Z" fill="#F59E0B"/>
      <path d="M14 30H34V34H14V30Z" fill="#F59E0B"/>
      <circle cx="16" cy="16" r="2" fill="#F59E0B"/>
      <circle cx="24" cy="12" r="2" fill="#F59E0B"/>
      <circle cx="32" cy="16" r="2" fill="#F59E0B"/>
    </svg>
  );
}

// Misc Icons
export function MotorcycleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="32" r="6" fill="currentColor"/>
      <circle cx="36" cy="32" r="6" fill="currentColor"/>
      <path d="M12 26L20 18H28L32 22L36 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 26H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="24" cy="18" r="3" fill="currentColor"/>
    </svg>
  );
}

export function RecycleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 19L12 14L9 14L9 10L15 10L15 14L12 14L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(0 12 12)"/>
      <path d="M7 19L12 14L9 14L9 10L15 10L15 14L12 14L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(120 12 12)"/>
      <path d="M7 19L12 14L9 14L9 10L15 10L15 14L12 14L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(240 12 12)"/>
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3C12 3 4 7 4 14C4 19 8 22 12 22C16 22 20 19 20 14C20 7 12 3 12 3Z" fill="currentColor"/>
      <path d="M12 8V16M9 11C10 13 11 14 12 14C13 14 14 13 15 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L4 12H8L3 20H21L16 12H20L12 2Z" fill="currentColor"/>
      <rect x="10" y="20" width="4" height="4" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function DropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C12 2 6 9 6 14C6 17.314 8.686 20 12 20C15.314 20 18 17.314 18 14C18 9 12 2 12 2Z" fill="currentColor"/>
      <path d="M10 14C10 12.895 10.895 12 12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5"/>
      <path d="M12 7V17M9 10H15M9 14H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="currentColor"/>
    </svg>
  );
}

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" fill="currentColor"/>
      <rect x="5" y="12" width="14" height="10" rx="1" fill="currentColor" opacity="0.7"/>
      <path d="M12 8V22" stroke="white" strokeWidth="2"/>
      <path d="M12 8C12 8 8 8 8 5C8 3 10 2 12 4C14 2 16 3 16 5C16 8 12 8 12 8Z" fill="currentColor"/>
    </svg>
  );
}

export function IndonesiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="8" fill="#FF0000"/>
      <rect y="8" width="24" height="8" fill="#FFFFFF"/>
    </svg>
  );
}

// Additional UI Icons
export function WaveHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 11V7C7 5.895 7.895 5 9 5C10.105 5 11 5.895 11 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M11 10V5C11 3.895 11.895 3 13 3C14.105 3 15 3.895 15 5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 9V6C15 4.895 15.895 4 17 4C18.105 4 19 4.895 19 6V15C19 18.314 16.314 21 13 21H11C7.686 21 5 18.314 5 15V12C5 10.895 5.895 10 7 10C8.105 10 9 10.895 9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 8C3 8 4 7 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 11C2 11 4 10 5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function StarBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="currentColor"/>
      <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.3"/>
    </svg>
  );
}

export function MedalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 2H16L14 8H10L8 2Z" fill="currentColor" opacity="0.5"/>
      <circle cx="12" cy="14" r="6" fill="currentColor"/>
      <circle cx="12" cy="14" r="4" stroke="white" strokeWidth="1.5"/>
      <path d="M12 11V17M9.5 14H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C8.134 2 5 5.134 5 9C5 11.388 6.212 13.488 8 14.693V18C8 19.105 8.895 20 10 20H14C15.105 20 16 19.105 16 18V14.693C17.788 13.488 19 11.388 19 9C19 5.134 15.866 2 12 2Z" fill="currentColor"/>
      <path d="M10 22H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 15H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function OnlineStatusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="6" fill="#22C55E"/>
      <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.5"/>
    </svg>
  );
}
