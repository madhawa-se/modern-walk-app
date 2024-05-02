import { CardType } from "../models/card-type";
import { Product } from "../models/interfaces/product-interface";
import './card.scss'
const Card: React.FC<{ product: Product, type: CardType }> = ({ product: { title, price, description, image }, type = 'primary' }) => {
    return (<>
        <article className={`card shadow-md card card--${type}`}>
            <div className="font-bold text-2xl">{title}</div>
            <figure>
                <img src={image} className="mx-auto w-full" alt="Example Image" />
            </figure>
            <div className={`bottom-view rounded-3xl ${type === 'primary' ? 'card--primary bg-primary' : 'card--secondary bg-secondary'}`}>
                <div className="text-3xl text-vividBlue">{price}</div>
                <p>{description}</p>
            </div>
        </article>
    </>);
}

export default Card;