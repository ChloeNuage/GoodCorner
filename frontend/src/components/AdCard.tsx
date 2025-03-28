import { Link } from 'react-router';
import { Ad } from '../../../interfaces/entities';

type AdCardProps = Omit<Ad, "id">;

const AdCard = ({title, pictureUrl, price, link }: AdCardProps) => {
    return (
        <div className="ad-card-container">
            <Link className="ad-card-link" to={"/ad/"+link}>
                <div className="ad-card-image"> 
                    <img src={pictureUrl} alt={title}/>
                </div>
                <div className="ad-card-text">
                    <div className="ad-card-title">{title}</div>
                    <div className="ad-card-price">{price}€</div>
                </div>
            </Link>
        </div>
    );
}
export default AdCard;