import clsx from "clsx";
import { ItemIconButton } from "components/ItemIcon";
import { ItemType } from "data/itemType";
import useItems from "hook/useItems";
import { FC, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { RoutePath } from "routes/constants";

type ItemsSelector = {
  item?: ItemType;
};

const ItemsSelector: FC<ItemsSelector> = ({ item }) => {
  const navigate = useNavigate();
  const { groupedItems, groupsList } = useItems();
  const [selectedGroup, setSelectedGroup] = useState<string>("logistics");

  return (
    <>
      <div className="flex space-x-2 px-3">
        {groupsList.map((group, idx) => {
          const isSelected = group === selectedGroup;
          return (
            <div
              key={idx}
              className={clsx(
                " px-3 rounded-t py-1.5 font-medium text-yellow-500 cursor-pointer capitalize font-title text-lg",
                {
                  "bg-neutral-700": isSelected,
                }
              )}
              onClick={() => setSelectedGroup(group)}
            >
              {group.replace("-", " ")}
            </div>
          );
        })}
      </div>
      <div className="bg-neutral-700 rounded p-4 flex gap-3 flex-wrap ">
        {groupedItems[selectedGroup]?.map((el: ItemType) => {
          return (
            <ItemIconButton
              key={el.name}
              item={el}
              size="sm"
              onClick={() =>
                navigate(generatePath(RoutePath.ITEM, { itemName: el.name }))
              }
              isSelected={el.name === item.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemsSelector;
