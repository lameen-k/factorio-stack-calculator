import ContainerAmountCard from "components/ContainerAmountCard";
import { ItemIconButton } from "components/ItemIcon";
import { ContainerType } from "data/containers";
import { ItemType } from "data/itemType";
import { FC } from "react";

type ContainerCols = {
  selectedContainers: ContainerType[];
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
      {selectedContainers.map(container => {
        return (
          <div key={container?.name} className="w-64">
            <div className="border-b flex border-neutral-700  pb-2 items-center space-x-3">
              <ItemIconButton isStatic item={container} size="md" />
              <div>
                <div className="text-lg font-medium font-title">
                  {container.localized_name?.en ?? container.name}
                </div>
                <div className="text-xs  flex space-x-1">
                  <span className="text-yellow-500 font-semibold">
                    {container.stack_count}
                  </span>
                  <span className="opacity-70">Available slot</span>
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
