import { useParams } from "react-router-dom";
import Layout from "core/Layout";
import { ContainerType, containers } from "data/containers";
import { useEffect, useState } from "react";
import ContainerCols from "./ContainerCols";
import { ItemType, NameProp } from "data/itemType";
import SelectedItemCard from "./SelectedItemCard";
import ContainersSelector from "./ContainersSelector";
import { items } from "data/vanilla-1.1.19.json";
import ItemsSelector from "components/ItemsSelector";

type ParamType = {
  itemName: NameProp | string;
  group?: string;
};

const Item = () => {
  const { itemName, group } = useParams<ParamType>();
  const [item, setItem] = useState<ItemType>();
  const [selectedContainers, setSelectedContainers] = useState<ContainerType[]>(
    []
  );
  const [containersCount, setContainersCount] = useState<number[]>([
    3, 4, 6, 8, 12, 18, 24,
  ]);
  useEffect(() => {
    // setItem();
    setSelectedContainers([containers[0], containers[1], containers[2]]);
    // @ts-ignore
    setItem(items[itemName]);
  }, [itemName]);
  return (
    <Layout>
      <div className="py-12">
        <ItemsSelector item={item} group={group} />

        {!!item && (
          <>
            {/* selectedElement */}
            <div className="mt-10 flex justify-between items-start">
              <SelectedItemCard item={item} />
              <ContainersSelector
                setSelectedContainers={setSelectedContainers}
                selectedContainers={selectedContainers}
                containersCount={containersCount}
                setContainersCount={setContainersCount}
              />
            </div>
            <ContainerCols
              selectedContainers={selectedContainers}
              containersCount={containersCount}
              item={item}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Item;
