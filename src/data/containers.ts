import { items } from "data/vanilla-1.1.19-expensive.json";

export type containerProps = {
  name: string;
  slots: number;
  icon: keyof typeof items;
};

export const containers = [
  {
    name: "Steel Chest",
    slots: 49,
    icon: "steel-chest",
  },
  {
    name: "Cargo Wagon",
    slots: 50,
    icon: "cargo-wagon",
  },
  {
    name: "Spidertron",
    slots: 100,
    icon: "spidertron",
  },
  {
    name: "Car",
    slots: 100,
    icon: "car",
  },
];
