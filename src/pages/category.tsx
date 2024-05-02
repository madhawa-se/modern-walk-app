import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import { categoryMap,CategoryMapKey } from "../models/category-map";
import API from "../services/api-service";

function Category() {

    let { categoryKey } = useParams<{ categoryKey: CategoryMapKey }>();
    if (!categoryKey) {
        return <>no category</>
    }
    const category = categoryMap[categoryKey];
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.get(`/products/category/${category}?limit=20`).then(({ data }) => {
            setProducts(data);
            console.log({ data });
        }).catch(e => {
            console.error("error", e);
        });
    }, []);

    return (
        <>
             <div className="product-row">
                {products.map(product => <Card product={product}></Card>)}
            </div>
        </>
    )
}

// const categoryFilter=categoryMap[category];


export default Category;