import clsx from "clsx";
import { containerProps } from "data/containers";
import { ItemType } from "data/itemType";
import { useToggle } from "hook/useToggle";
import { FC } from "react";

export type containerAmountCardsProps = {
  container: containerProps;
  item: ItemType;
  count: number;
};

const ContainerAmountCard: FC<containerAmountCardsProps> = ({
  container,
  item,
  count,
}) => {
  const [value, toggle] = useToggle();
  return (
    <div
      className={clsx(
        "bg-neutral-700 rounded p-2 flex space-x-4 hover:border-l-yellow-600 border-l-4 border-l-neutral-700 transition-all",
        {
          "border-l-yellow-600": value,
        }
      )}
      onClick={toggle}
    >
      <div className="bg-neutral-800 w-8 h-8 rounded flex items-center justify-center text-xl font-bold">
        {count}
      </div>
      <div className="pr-2 ">
        <div className="font-medium text-xl">
          {(item.stack_size * container.slots * count).toLocaleString()}
        </div>
        <div className="opacity-50 text-xs">
          {item.stack_size} x {container.slots} x {count}
        </div>
      </div>
    </div>
  );
};

export default ContainerAmountCard;
