import { Product } from "../models/interfaces/product-interface";

const Card: React.FC<{ product: Product }> = ({ product: { title, price, description, image } }) => {
    return (<>
        <article className="shadow-md">

            <div className="font-bold text-2xl">{title}</div>
            <figure>
                <img src={image} alt="Example Image" />
            </figure>
            <div>
                <div className="text-3xl">{price}</div>
                <p>{description}</p>
            </div>

        </article>
    </>);
}

export default Card;