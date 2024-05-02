import { Product } from "../models/interfaces/product-interface";
import { calcWidth } from "../utils/dimention";
import Card from "./card";

interface GridViewProps {
  products: Product[];
  elementsPerRow: number;
}

const GridView: React.FC<GridViewProps> = ({ products, elementsPerRow }) => {
  const itemWidth = calcWidth(elementsPerRow);

  return (
    <div className="grid-container">
      <div className="product-row flex flex-wrap items-stretch">
        {products.map(product => <div style={{ width: '25%' }}>
          <div className="m-5">
            <Card product={product} type="primary" key={product.id}></Card>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default GridView;