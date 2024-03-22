import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import SpriteIcon from "components/SpriteIcon";
import imageExist from "util/imageExist";
import { ItemType } from "data/itemType";
import { useToggle } from "hook/useToggle";

type ItemIconButtonProps = {
  item: ItemType;
  isStatic?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  size?: "md" | "lg" | "sm" | "xl" | "xs";
  className?: string;
  count?: number;
};

export const ItemIconButton: FC<ItemIconButtonProps> = ({
  item,
  isStatic,
  onClick,
  isSelected,
  className,
  size = "md",
  count,
}) => {
  const [value, toggle, setValue] = useToggle(false);
  const imageRef = useRef();

  useEffect(() => {
    setValue(false);
    setTimeout(() => {
      toggle();
    }, 1);
  }, [item.name]);

  return (
    <div
      onClick={onClick}
      className={clsx(
        "shadow-inner rounded text-center relative items-center justify-center flex",
        !isStatic && "hover:shadow-neutral-950 cursor-pointer transition-all",
        {
          "bg-yellow-500 shadow bg-opacity-80 shadow-neutral-950": isSelected,
          " bg-neutral-800": !isSelected,
          "hover:translate-y-0.5": !isSelected && !isStatic,
          "w-6 h-6 p-0.5": size === "xs",
          "w-10 h-10 p-1.5": size === "sm",
          "w-14 h-14 p-1.5": size === "md",
          "w-16 h-16 p-1.5": size === "lg",
          "w-20 h-20 p-1.5": size === "xl",
        }
      )}
    >
      {!!value && (
        <img
          ref={imageRef}
          src={`/images/${item.name}.png`}
          className={className}
          alt={item.name}
          onError={img => {
            const { currentTarget } = img;

            const spriteStyle = SpriteIcon({
              col: item.icon_col,
              row: item.icon_row,
            });
            currentTarget.src = "/sprite-sheet.png";
            currentTarget.className = clsx(
              {
                "scale-[0.7]": size === "xs",
                "scale-[1.65]": size === "lg",
                "scale-[2]": size === "xl",
              },
              className
            );
            imageRef.current.style.width = spriteStyle.width;
            imageRef.current.style.height = spriteStyle.height;
            imageRef.current.style.objectFit = spriteStyle.objectFit;
            imageRef.current.style.objectPosition = spriteStyle.objectPosition;
          }}
        />
      )}

      {/* {isSprite ? (
        <SpriteIcon
          col={item.icon_col}
          row={item.icon_row}
          className={clsx(
            {
              "scale-[0.7]": size === "xs",
              "scale-[1.65]": size === "lg",
              "scale-[2]": size === "xl",
            },
            className
          )}
          alt={item.name}
        />
      ) : (
        <img
          src={`/images/${item.name}.png`}
          className={className}
          alt={item.name}
        />
      )} */}
      {!!count && (
        <div className="absolute -top-2 -right-3 shadow-black bg-black bg-opacity-40 rounded-full text-yellow-500 w-4 h-4 text-xs flex justify-center items-center">
          {count}
        </div>
      )}
    </div>
  );
};
