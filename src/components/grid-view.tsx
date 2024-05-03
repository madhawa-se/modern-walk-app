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
    <div className="grid-container -mx-4">
      <div className="product-row flex flex-wrap items-stretch">
        {products.map(product => <div key={product.id} className="flex flex-col	items-stretch" style={{ width: itemWidth }}>
          <div className="gap-4 h-full p-4">
            <Card product={product} type="primary" key={product.id}></Card>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default GridView;