// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ItemType } from "data/itemType";
import { items, groups, recipes } from "data/vanilla-1.1.19-expensive.json";
import { useEffect, useState } from "react";
import groupBy from "util/groupBy";

export default function useItems() {
  const [itemsAr, setItemsAr] = useState<ItemType[]>([]);
  const [groupedItems, setGroupedItems] = useState<any>({});
  const [groupsList, setGroupsList] = useState([]);

  const applyCustomOrder = (field, arr, desiredOrder) => {
    const orderForIndexVals = desiredOrder.slice(0).reverse();
    return arr.sort((a, b) => {
      const aIndex = -orderForIndexVals.indexOf(a[field]);
      const bIndex = -orderForIndexVals.indexOf(b[field]);
      return aIndex - bIndex;
    });
  };

  const removeBasicClips = str => {
    return str.replace(/-a\[[^\]]+\]/g, "-").replace(/\[.*?\]/g, "");
  };

  // setup custom order to match in game icon order
  const orderRule = pointerGroup =>
    Object.keys(
      Object.entries(groups[pointerGroup].subgroups)
        .sort(([, a], [, b]) => (a !== b ? (a < b ? -1 : 1) : 0))
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    );

  const itemRecipe = itemName => {
    return recipes[itemName]?.ingredients ?? [];
  };

  useEffect(() => {
    const itms: ItemType[] = Object.values(items)
      .filter(i => {
        return (
          !i?.localized_name?.en?.includes("dummy") && !i.name.includes("dummy")
        );
      })
      .sort((a, b) => {
        const aOrder = removeBasicClips(a?.order ?? "a");
        const bOrder = removeBasicClips(b.order ?? "a");
        return aOrder !== bOrder ? (aOrder < b.order ? -1 : 1) : 0;
      });

    const itemsGrouped = groupBy(itms, "group");

    Object.keys(itemsGrouped).map(groupName => {
      const orderedItems = (itemsGrouped[groupName] = applyCustomOrder(
        "subgroup",
        itemsGrouped[groupName],
        orderRule(groupName)
      ));
      setGroupedItems(s => {
        return { ...s, [groupName]: orderedItems };
      });
    });

    setItemsAr(itms);
    setGroupsList(Object.keys(itemsGrouped).filter(i => i !== "other"));
    // console.log("--itemsGrouped--", itemsGrouped);
  }, []);

  return {
    itemsAr,
    groupedItems,
    groupsList,
    itemRecipe,
  };
}
