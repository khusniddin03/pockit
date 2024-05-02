interface IFooterItem {
  path: string;
  label: string;
}

interface IFooterDataItem {
  title: string;
  children: IFooterItem[];
}

interface IFaqAccardionItem {
  question: string;
  content: React.ReactNode;
}

interface ISupportCardItem {
  image: string;
  title: string;
  description: string;
  icon: string;
}

interface IDigitalCardItem {
  title: string;
  image: string;
}

interface IDiscoverCardItem {
  type: "orange" | "green" | "purple" | "blue";
  title: string;
  icon: string;
  list: Pick<IDigitalCardItem, "title">[];
  link: string;
  subtext: string;
}

interface INavItem {
  path: string;
  label: string;
  children?: INavItem[];
}

interface IClientCardItem {
  image: string;
  message: string;
  name: string;
  date: string;
}

export type {
  IFooterItem,
  IFooterDataItem,
  IFaqAccardionItem,
  ISupportCardItem,
  IDigitalCardItem,
  IDiscoverCardItem,
  INavItem,
  IClientCardItem,
};
