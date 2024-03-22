import clsx from "clsx";
import { ItemIconButton } from "components/ItemIcon";
import { containers } from "data/containers";
import { ItemType } from "data/itemType";
import { FC, useEffect, useState } from "react";

type ContainersSelectorProps = {
  setSelectedContainers: any;
  selectedContainers: ItemType[];
  containersCount: number[];
  setContainersCount: any;
};

const ContainersSelector: FC<ContainersSelectorProps> = ({
  setSelectedContainers,
  selectedContainers,
  containersCount,
  setContainersCount,
}) => {
  const [counts, setCounts] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setCounts(containersCount);
  }, []);
  const manageSelection = ({ state, container }: any) => {
    const isSelected = state.some((e: ItemType) => e.name === container.name);
    if (!isSelected) {
      return [...state, container];
    }
    return state.filter((e: ItemType) => e.name !== container.name);
  };

  const manageCount = (c: number) => {
    const isSelected = counts.some((e: number) => c === e);
    setCounts((s: number[]) => {
      if (!isSelected) {
        return [...s, c];
      }
      return s.filter(i => i !== c);
    });
  };

  const validateCount = () => {
    setContainersCount(counts);
    setShowModal(false);
  };

  return (
    <div className="flex justify-end flex-col">
      <div className="bg-neutral-700 rounded self-end p-2 flex gap-3 flex-wrap">
        {containers.map((container, idx: number) => {
          return (
            <ItemIconButton
              key={idx}
              item={container}
              size="sm"
              isSelected={selectedContainers.some(
                e => e.name === container.name
              )}
              onClick={() =>
                setSelectedContainers((state: ItemType[]) =>
                  manageSelection({ state, container })
                )
              }
            />
          );
        })}
      </div>
      <div className="flex">
        <div
          className="bg-neutral-700 rounded mt-1  px-3 py-1 flex gap-1 cursor-pointer hover:bg-neutral-900 hover:text-yellow-100"
          onClick={() => setShowModal(true)}
        >
          <div className="font-medium font-title">Select container count</div>
        </div>
      </div>

      {showModal && (
        <div className="w-[462px] flex flex-col rounded shadow-black border-neutral-900 border shadow-2xl p-3 bg-neutral-700 absolute mx-auto inset-x-0">
          <div className="flex flex-wrap gap-1">
            {Array.from(Array(41).keys()).map(stack => {
              if (stack === 0) {
                return;
              }
              const isSelected = counts.includes(stack);
              return (
                <div
                  key={stack}
                  className={clsx(
                    "bg-neutral-800 w-10 h-10 text-sm rounded justify-center items-center flex cursor-pointer hover:bg-yellow-800",
                    {
                      "bg-yellow-800 shadow-inner shadow-neutral-900":
                        isSelected,
                    }
                  )}
                  onClick={() => manageCount(stack)}
                >
                  {stack}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center pt-3 cursor-pointer">
            <div className="text-sm" onClick={() => setCounts([])}>
              Clear all
            </div>
            <div
              className="rounded bg-neutral-950 py-0.5 px-10 hover:bg-yellow-800 cursor-pointer"
              onClick={validateCount}
            >
              ok
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainersSelector;
