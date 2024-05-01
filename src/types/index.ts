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

export type {
  IFooterItem,
  IFooterDataItem,
  IFaqAccardionItem,
  ISupportCardItem,
  IDigitalCardItem,
};
