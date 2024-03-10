import { FC } from "react";
import clsx from "clsx";
import { items } from "data/vanilla-1.1.19-expensive.json";

export type ItemImageProp = {
  name: keyof typeof items;
};

type ItemIconProps = ItemImageProp & {
  className?: string;
  count?: number;
};

type ItemIconButtonProps = ItemImageProp & {
  isStatic?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  size?: "md" | "lg";
};

export const ItemIcon: FC<ItemIconProps> = ({ name, className, count }) => {
  return (
    <div className="relative">
      <img src={`/images/${name}.png`} className={className} alt={name} />
      {!!count && (
        <div className=" absolute -top-2 -right-2 shadow-black bg-black bg-opacity-40 rounded-full text-yellow-500 w-4 h-4 text-xs flex justify-center items-center">
          {count}
        </div>
      )}
    </div>
  );
};

export const ItemIconButton: FC<ItemIconButtonProps> = ({
  name,
  isStatic,
  onClick,
  isSelected,
  size = "md",
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        " shadow-inner rounded text-center items-center justify-center flex p-1.5 ",
        !isStatic && "hover:shadow-neutral-950 cursor-pointer transition-all",
        {
          "bg-amber-800 shadow shadow-neutral-950": isSelected,
          " bg-neutral-800": !isSelected,
          "hover:translate-y-0.5": !isSelected && !isStatic,
          "w-10 h-10": size === "md",
          "w-16 h-16": size === "lg",
        }
      )}
    >
      <img src={`/images/${name}.png`} alt={name} />
    </div>
  );
};
