import type { INavItem } from "@/types";

const NAVBAR_ITEMS: INavItem[] = [
  {
    label: "Card",
    path: "/card",
    children: [
      {
        label: "Card for everyday use →",
        path: "/test",
      },
      {
        label: "Card for travel →",
        path: "/",
      },
      {
        label: "Card for sharing money →",
        path: "/",
      },
      {
        label: "Apple Pay →",
        path: "/",
      },
      {
        label: "Google Pay™ →",
        path: "/",
      },
    ],
  },
  {
    label: "Payments",
    path: "/",
    children: [
      {
        label: "Add money —>",
        path: "/",
      },
      {
        label: "Get paid early —>",
        path: "/",
      },
      {
        label: "Send money abroad —>",
        path: "/",
      },
      {
        label: "Direct Debits —>",
        path: "/",
      },
    ],
  },
  {
    label: "Find cash",
    path: "/",
    children: [
      {
        label: "Cashback rewards —>",
        path: "/",
      },
      {
        label: "Gift cards —>",
        path: "/",
      },
      {
        label: "Save on broadband bills —>",
        path: "/",
      },
      {
        label: "Save on mobile —>",
        path: "/",
      },
    ],
  },
  {
    label: "Credit",
    path: "/",
    children: [
      {
        label: "Credit Builder —>",
        path: "/",
      },
      {
        label: "Income Advance —>",
        path: "/",
      },
    ],
  },
  {
    label: "Plans",
    path: "/",
  },
  {
    label: "Company",
    path: "/",
    children: [
      {
        label: "About Pockit →",
        path: "/",
      },
      {
        label: "Careers →",
        path: "/",
      },
      {
        label: "Partnerships →",
        path: "/",
      },
      {
        label: "Blog →",
        path: "/",
      },
    ],
  },
  {
    label: "Help",
    path: "/",
  },
];

export { NAVBAR_ITEMS };
