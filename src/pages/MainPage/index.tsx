import Layout from "core/Layout";
import { ContainerType, containers } from "data/containers";
import { useEffect, useState } from "react";
import ContainerCols from "./ContainerCols";
import ItemsSelector from "./ItemsSelector";
import { ItemType } from "data/itemType";
import SelectedItemCard from "./SelectedItemCard";
import ContainersSelector from "./ContainersSelector";

const MainPage = () => {
  const [item, setItem] = useState<ItemType>();
  const [selectedContainers, setSelectedContainers] = useState<ContainerType[]>(
    []
  );
  const [containersCount, setContainersCount] = useState<number[]>([
    3, 4, 6, 8, 12, 18, 24,
  ]);
  useEffect(() => {
    // setItem();
    // @ts-ignore
    setSelectedContainers([containers[0], containers[1], containers[2]]);
  }, []);
  return (
    <Layout>
      <div className="py-12">
        <ItemsSelector setItem={setItem} item={item} />

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

export default MainPage;
