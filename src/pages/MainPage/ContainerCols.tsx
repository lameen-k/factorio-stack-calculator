import ContainerAmountCard from "components/ContainerAmountCard";
import { ItemIcon } from "components/ItemIcon";
import { containerProps } from "data/containers";
import { ItemType } from "data/itemType";
import { FC } from "react";

type ContainerCols = {
  selectedContainers: containerProps[];
  item: ItemType;
  containersCount: number[];
};
const ContainerCols: FC<ContainerCols> = ({
  selectedContainers,
  item,
  containersCount,
}) => {
  return (
    <div className="flex mt-6">
      {selectedContainers.map((container: containerProps) => {
        return (
          <div key={container.icon} className="w-64">
            <div className="border-b flex border-neutral-700  pb-2 items-center space-x-3">
              <ItemIcon name={container.icon} className="w-10" />
              <div>
                <div className="text-lg font-semibold">{container.name}</div>
                <div className="text-xs opacity-50">
                  {container.slots} Stack size
                </div>
              </div>
            </div>
            <div className="pr-4 pt-4 space-y-2">
              {containersCount
                .sort((a, b) => a - b)
                .map(count => (
                  <ContainerAmountCard
                    key={count}
                    count={count}
                    container={container}
                    item={item}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContainerCols;
