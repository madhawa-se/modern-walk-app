import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/category-card";
import GridView from "../components/grid-view";
import Loading from "../components/loading";
import { CategoryMapKey } from "../models/category-map";
import API from "../services/api-service";
function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setloading(true);
        API.get("/products?limit=5").then(({ data }) => {
            setProducts(data);
            console.log({ data });
        }).catch(e => {
            console.error("error", e);
        }).finally(() => {
            setloading(false);
        });
    }, []);

    const handleClick = (category: CategoryMapKey) => {
        navigate(`/${category}`);
    }

    return (
        <div className="page mx-10">

            {loading && <Loading></Loading>}

            <div className="mt-12">
                <h2 className="text-2xl font-bold">Flash Sale</h2>
                {
                    !loading &&
                    <GridView products={products} elementsPerRow={4}></GridView>
                }
            </div>

            <div className="mt-12 mb-6">
                <h2 className="text-2xl font-bold">Categories</h2>
                <div className="mt-4 flex flex-wrap">

                    <div className="w-1/2">
                        <CategoryCard className="bg-primary mr-5" category="Men's Clothing" onClick={() => handleClick('mens-clothing')}></CategoryCard>
                    </div>

                    <div className="w-1/2">
                        <CategoryCard className="bg-secondary ml-5" category="Women's Clothing" onClick={() => handleClick('womens-clothing')}></CategoryCard>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;