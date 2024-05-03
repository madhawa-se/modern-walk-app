import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import CategoryCard from "../components/category-card";
import GridView from "../components/grid-view";
import { CategoryMapKey } from "../models/category-map";
import API from "../services/api-service";
function Home() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        API.get("/products?limit=5").then(({ data }) => {
            setProducts(data);
            console.log({ data });
        }).catch(e => {
            console.error("error", e);
        });
    }, []);

    const handleClick = (category: CategoryMapKey) => {
        navigate(`/${category}`);
    }

    return (
        <>
            <div>
                <GridView products={products} elementsPerRow={4}></GridView>
            </div>
            <div className="flex flex-wrap">

                <div className="w-1/2">
                    <CategoryCard className="bg-primary m-5" category="Men's Clothing" onClick={() => handleClick('mens-clothing')}></CategoryCard>
                </div>

                <div className="w-1/2">
                    <CategoryCard className="bg-secondary m-5" category="Women's Clothing" onClick={() => handleClick('womens-clothing')}></CategoryCard>
                </div>
            </div>
        </>
    )
}

export default Home;