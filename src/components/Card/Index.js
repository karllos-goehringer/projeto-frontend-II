import { Link } from 'react-router-dom';
import estilo from './Card.module.css';

export default function Card(props) {
    return (
        <Link to={`/itemPagina/${props.id}`} className={estilo.link}>
            <div className={estilo.container}>
                <div className = {estilo.shotcard}>
                    <img src={props.link} alt={props.alt} className={estilo.shotcardimg} />
                    <p>{props.descricao}</p>
                </div>
            </div>
        </Link>
    )
}
