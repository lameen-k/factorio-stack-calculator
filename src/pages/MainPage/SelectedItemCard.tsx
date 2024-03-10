import { ItemIcon, ItemIconButton } from "components/ItemIcon";
import { ItemIngredientType, ItemType } from "data/itemType";
import useItems from "hook/useItems";
import { FC } from "react";

type SelectedItemCardProps = {
  item: ItemType;
};

const SelectedItemCard: FC<SelectedItemCardProps> = ({ item }) => {
  const { itemRecipe } = useItems();

  return (
    <div className="bg-neutral-700 rounded p-2 flex space-x-4">
      <ItemIconButton name={item.name} size="lg" isStatic />
      <div className="pr-2">
        <div className="font-medium font-title text-xl">
          {item.localized_name?.en}
        </div>
        <div className="flex">
          <div className="text-xs flex bg-neutral-800 rounded px-2 py-1 space-x-2 mt-1">
            {itemRecipe(item.name).map(
              (
                ingr: ItemIngredientType,
                i: number,
                { length }: { length: number }
              ) => {
                return (
                  <div className="flex" key={i}>
                    <ItemIcon
                      name={ingr.name}
                      className="w-6"
                      count={ingr.amount}
                    />
                    {length - 1 !== i && <div className="ml-1">+</div>}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemCard;
