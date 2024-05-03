import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GridView from "../components/grid-view";
import Loading from "../components/loading";
import { categoryMap, CategoryMapKey } from "../models/category-map";
import API from "../services/api-service";

function Category() {

    let { categoryKey } = useParams<{ categoryKey: CategoryMapKey }>();
    if (!categoryKey) {
        return <div>no category</div>
    }
    const category = categoryMap[categoryKey];
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        API.get(`/products/category/${category}?limit=20`).then(({ data }) => {
            setProducts(data);
        }).catch(e => {
            console.error(e);
            alert("error occured");
        }).finally(() => {
            setloading(false);
        });
    }, []);

    return (
        <>
            <div className="page product-row mx-10">
                <div className="mt-12">
                    {
                        loading ?
                            <Loading></Loading> :
                            <GridView products={products} elementsPerRow={4}></GridView>
                    }
                </div>
            </div>
        </>
    )
}

export default Category;