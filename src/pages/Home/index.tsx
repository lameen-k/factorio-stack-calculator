import Layout from "core/Layout";
import ItemsSelector from "components/ItemsSelector";

const Home = () => {
  return (
    <Layout>
      <div className="py-12">
        <ItemsSelector />
      </div>
    </Layout>
  );
};

export default Home;
