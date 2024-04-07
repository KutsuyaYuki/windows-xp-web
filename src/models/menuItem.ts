export type MenuItem = {
  name: string;
  icon?: string;
  action?: () => void;
  children?: MenuItem[];
};
