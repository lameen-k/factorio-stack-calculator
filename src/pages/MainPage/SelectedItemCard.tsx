import { ItemIconButton } from "components/ItemIcon";
import { ItemIngredientType, ItemType } from "data/itemType";
import useItems from "hook/useItems";
import { items } from "data/vanilla-1.1.19.json";
import { FC } from "react";

type SelectedItemCardProps = {
  item: ItemType;
};

const SelectedItemCard: FC<SelectedItemCardProps> = ({ item }) => {
  const { itemIngredients, itemResults, hasReceipe } = useItems(item.name);

  return (
    <div className="bg-neutral-700 rounded p-2 flex space-x-4">
      <ItemIconButton item={item} size="lg" isStatic />
      <div className="pr-2 flex flex-col justify-between">
        <div className="font-medium  justify-between flex space-x-2 items-center">
          <div className="font-title text-2xl">{item.localized_name?.en}</div>
          <div className="text-xs items-center flex text-yellow-500 bg-neutral-800 rounded px-2 py-1 space-x-2 ">
            <span className="text-white text-opacity-60">Stack size</span>
            <span className="font-bold text-sm">{item.stack_size}</span>
          </div>
        </div>
        {hasReceipe() && (
          <div className="flex items-center pt-1">
            <div className="text-xs flex bg-neutral-800 rounded px-2 py-1 space-x-2 ">
              {itemIngredients().map(
                (
                  ingr: ItemIngredientType,
                  i: number,
                  { length }: { length: number }
                ) => {
                  return (
                    <div className="flex items-center space-x-2" key={i}>
                      <ItemIconButton
                        isStatic
                        // @ts-ignore
                        item={items[ingr.name]}
                        size="xs"
                        count={ingr.amount}
                      />
                      {length - 1 !== i && <div className="">+</div>}
                    </div>
                  );
                }
              )}
            </div>
            <div className="mx-1"> = </div>
            <div className="text-xs flex bg-neutral-800 rounded px-2 py-1 space-x-2">
              {itemResults(item.name).map(
                (
                  ingr: ItemIngredientType,
                  i: number,
                  { length }: { length: number }
                ) => {
                  return (
                    <div className="flex items-center" key={i}>
                      <ItemIconButton
                        isStatic
                        // @ts-ignore
                        item={items[ingr.name]}
                        size="xs"
                        count={ingr.amount}
                      />
                      {length - 1 !== i && <div className="ml-1">+</div>}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedItemCard;
