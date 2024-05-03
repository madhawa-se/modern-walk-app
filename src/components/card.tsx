import { useMediaQuery } from "../hooks/media-column-hook";
import { CardType } from "../models/card-type";
import { Product } from "../models/interfaces/product-interface";
import { toLKR } from "../utils/currency";
import { truncate } from "../utils/text-op";
import './card.scss'
const Card: React.FC<{ product: Product, type: CardType }> = ({ product, type = 'primary' }) => {

    const { title, price, description, image } = product;
    return (<>
        <article className={`card h-full flex flex-col shadow-md rounded-3xl pt-4 card card--${type}`}>
            <div className='card-content p-4 text-center'>
                <div className="font-bold text-xl md:text-lg min-h-14">{title}</div>
                <div className="preview-wrap flex items-center mx-auto">
                    <figure className="py-8 preview mx-auto">
                        <img src={image} className="mx-auto w-full h-full preview--img" alt="Example Image" />
                    </figure>
                </div>
            </div>
            <div className={`card-footer mt-auto rounded-3xl py-4 px-10 text-center ${type === 'primary' ? 'card--primary bg-primary' : 'card--secondary bg-secondary'}`}>
                <div className="text-lg md:text-3xl pb-2 text-vividBlue font-bold">{toLKR(price)}</div>
                <p className="details min-h-32 font-medium">{description ? truncate(description, 100) : ''}</p>
            </div>
        </article>
    </>);
}

export default Card;