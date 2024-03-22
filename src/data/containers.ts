import { items } from "data/vanilla-1.1.19.json";
import { ItemType } from "./itemType";

export type ContainerType = ItemType & {
  stack_count: number;
};

export const containers: ContainerType[] = [
  { ...items["steel-chest"], stack_count: 48 },
  { ...items["cargo-wagon"], stack_count: 50 },
  { ...items["spidertron"], stack_count: 100 },
  { ...items["car"], stack_count: 100 },
];
