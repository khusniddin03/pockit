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

export type { IFooterItem, IFooterDataItem, IFaqAccardionItem };
