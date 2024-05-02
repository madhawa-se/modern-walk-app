import { CardType } from "../models/card-type";
import { Product } from "../models/interfaces/product-interface";
import { toLKR } from "../utils/currency";
import { truncate } from "../utils/text-op";
import './card.scss'
const Card: React.FC<{ product: Product, type: CardType }> = ({ product: { title, price, description, image }, type = 'primary' }) => {
    return (<>
        <article className={`card shadow-md rounded-3xl pt-4 card card--${type}`}>
            <div className='card-content p-4 text-center'>
                <div className="font-bold text-xl">{title}</div>
                <figure className="py-4">
                    <img src={image} className="mx-auto w-full" alt="Example Image" />
                </figure>
            </div>
            <div className={`card-footer rounded-3xl py-4 px-10 text-center ${type === 'primary' ? 'card--primary bg-primary' : 'card--secondary bg-secondary'}`}>
                <div className="text-3xl pb-2 text-vividBlue font-bold">{toLKR(price)}</div>
                <p className="details">{description ? truncate(description, 100) : ''}</p>
            </div>
        </article>
    </>);
}

export default Card;