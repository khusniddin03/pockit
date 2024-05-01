import { IDigitalCardItem } from "@/types";
import img1 from "@/assets/imgs/new-to-uk_1.svg";
import img2 from "@/assets/imgs/low-credit.svg";
import img3 from "@/assets/imgs/denied-credit.svg";
import img4 from "@/assets/imgs/no-credit-history_1.svg";
import img5 from "@/assets/imgs/unverified-address.svg";
import img6 from "@/assets/imgs/no-photo-id.svg";
import img7 from "@/assets/imgs/secondary-account.svg";
import img8 from "@/assets/imgs/cashback_1.svg";
import img9 from "@/assets/imgs/paid-early.svg";

const DIGITAL_DATA: IDigitalCardItem[] = [
  {
    title: "New to the UK",
    image: img1,
  },
  {
    title: "Low credit score",
    image: img2,
  },
  {
    title: "Denied credit or loan",
    image: img3,
  },
  {
    title: "No credit history",
    image: img4,
  },
  {
    title: "Unverified address*",
    image: img5,
  },
  {
    title: "No photo ID*",
    image: img6,
  },
  {
    title: "Secondary account",
    image: img7,
  },
  {
    title: "Cashback & rewards",
    image: img8,
  },
  {
    title: "Get paid a day early",
    image: img9,
  },
];

export { DIGITAL_DATA };
