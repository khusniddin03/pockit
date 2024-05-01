import type { ISupportCardItem } from "@/types";
import cardImg1 from "@/assets/imgs/secure-p-500.png";
import cardImg2 from "@/assets/imgs/security.png";
import cardImg3 from "@/assets/imgs/support.png";

const SUPPORT_DATA: ISupportCardItem[] = [
  {
    title: "Safe & Secure",
    description:
      "Pockit uses secure infrastructure to protect your data and keep your account safe.",
    icon: "🔒",
    image: cardImg1,
  },
  {
    title: "Card controls: lock, unlock",
    description:
      "Manage your Pockit card in the app and stay safe with 24/7 protection against fraud.",
    icon: "💳",
    image: cardImg2,
  },
  {
    title: "Anytime, anywhere support",
    description:
      "If you need help, reach out to our support team in app, email or visit Help Centre.",
    icon: "☎️",
    image: cardImg3,
  },
];

export { SUPPORT_DATA };
