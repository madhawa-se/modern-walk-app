import { useMediaQuery } from "../hooks/media-column-hook";
import { categoryMap } from "../models/category-map";
import { Product } from "../models/interfaces/product-interface";
import { calcWidth } from "../utils/dimention";
import Card from "./card";

interface GridViewProps {
  products: Product[];
  elementsPerRow: number;
}

const GridView: React.FC<GridViewProps> = ({ products, elementsPerRow }) => {
  // column configuration should pass in this order higher to low width
  let matches = useMediaQuery([

    {
      size: '1024px',
      count: elementsPerRow
    },
    {
      size: '768px',
      count: 3
    },
    {
      size: '640px',
      count: 2
    }

  ]);

  const itemWidth = calcWidth(matches.columns);
  const getCardType = (category: string) => {
    return (category === categoryMap["womens-clothing"]) ? 'secondary' : 'primary';
  }
  return (
    <div className="grid-container -mx-4">
      <div className="product-row flex flex-wrap items-stretch">
        {products.map(product => <div key={product.id} className="flex flex-col	items-stretch" style={{ width: itemWidth }}>
          <div className="gap-4 h-full p-4">
            <Card product={product} key={product.id} type={getCardType(product.category)} ></Card>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default GridView;