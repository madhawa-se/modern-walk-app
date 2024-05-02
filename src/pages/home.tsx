import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import CategoryCard from "../components/category-card";
import { categoryMap, CategoryMapKey } from "../models/category-map";
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
            <div>Home</div>
            <div className="product-row">
                {products.map(product => <Card product={product}></Card>)}
            </div>
            <div className="flex">
                <CategoryCard category="Men" onClick={() => handleClick('mens-clothing')}></CategoryCard>
                <CategoryCard category="Women" onClick={() => handleClick('womens-clothing')}></CategoryCard>
            </div>
        </>
    )
}

export default Home;