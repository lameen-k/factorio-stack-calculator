import { items } from "data/vanilla-1.1.19.json";

export type NameProp = keyof typeof items;

export type ItemType = {
  group: string;
  icon_col?: number;
  icon_row?: number;
  localized_name?: { en: string };
  name: NameProp | string;
  order: string;
  stack_size: number;
  subgroup: string;
  type?: string;
};

export type ItemIngredientType = {
  amount: number;
  name: NameProp;
};
