import { items } from "data/vanilla-1.1.19-expensive.json";

export type ItemType = {
  group: string;
  icon_col?: number;
  icon_row?: number;
  localized_name?: { en: string };
  name: keyof typeof items;
  order: string;
  stack_size: number;
  subgroup: string;
  type: "item";
};

export type ItemIngredientType = {
  amount: number;
  name: keyof typeof items;
};
