import clsx from "clsx";
import { ContainerType } from "data/containers";
import { ItemType } from "data/itemType";
import { useToggle } from "hook/useToggle";
import { FC } from "react";

export type containerAmountCardsProps = {
  container: ContainerType;
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
        "bg-neutral-700 cursor-help group rounded p-2 flex space-x-4 hover:border-l-yellow-600 border-l-4 border-l-neutral-700 transition-all",
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
          {(item.stack_size * container.stack_count * count).toLocaleString()}
        </div>
        <div className="opacity-70 text-sm group-hover:opacity-100 group-hover:text-yellow-500">
          {item.stack_size} x {container.stack_count} x {count}
        </div>
      </div>
    </div>
  );
};

export default ContainerAmountCard;
