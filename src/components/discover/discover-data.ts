import type { IDiscoverCardItem } from "@/types";

const DISCOVER_DATA: IDiscoverCardItem[] = [
  {
    type: "orange",
    icon: "💸",
    title: "Get £50 cash advance before your payday",
    list: [
      { title: "No hard credit checks" },
      { title: "0% interest, only a flat fee of £4.99" },
      { title: "Paid directly into your Pockit account" },
      { title: "The advance is automatically repaid on your payday" },
    ],
    link: "/",
    subtext:
      "Income Advance eligibility: £300+ income paid into your Pockit account for 3 months, pay with Pockit regularly. Terms apply. Powered by SteadyPay.",
  },
  {
    type: "green",
    icon: "🪴",
    title: "Build for the future, today, with Pockit Credit Builder",
    list: [
      {
        title:
          "Build your credit score with the major UK Credit Reference Agencies",
      },
      { title: "Get access to personal credit in just 3 months" },
      { title: "No hard credit checks" },
    ],
    link: "/",
    subtext:
      "Available with the Pockit Fast Track to Credit plan. Powered by SteadyPay.",
  },
  {
    type: "purple",
    icon: "😎",
    title: "Earn up to £20 / month when paying with Pockit",
    list: [
      {
        title:
          "Earn up to 15% in cashback & rewards from major high street brands",
      },
      { title: "Save up to £264 on mobile, TV & broadband bills" },
      { title: "Get a chance to win one of the 1000’s prizes every week" },
    ],
    link: "/",
    subtext: "Terms and limits apply.",
  },
  {
    type: "blue",
    icon: "🛡️",
    title: "Get peace of mind with purchase protection",
    list: [
      { title: "Up to £1,000 purchase protection against damage or theft" },
      { title: "Refund protection for 90 days" },
      { title: "Ticket cancellation protection" },
      { title: "Extra 12 months warranty on electronic appliances" },
    ],
    link: "/",
    subtext:
      "Available with Pockit Extra and Pockit Fast Track to Credit plans. Terms apply. Powered by Jove, underwritten by Wakam.",
  },
];

export { DISCOVER_DATA };
