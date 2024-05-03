import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import GridView from "../components/grid-view";
import { categoryMap, CategoryMapKey } from "../models/category-map";
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
                <div>
                    <GridView products={products} elementsPerRow={4}></GridView>
                </div>
            </div>
        </>
    )
}

// const categoryFilter=categoryMap[category];


export default Category;