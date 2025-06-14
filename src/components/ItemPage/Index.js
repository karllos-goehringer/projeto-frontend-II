import estilo from './ItemPage.module.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import DownloadLink from '../DownloadLink/DownloadLink';


export default function ItemPage(props){
    console.log(props);
    return (
        <>
           <main>
            <div className={estilo.cardOverview}>
                <p className={estilo.title}>{props.descricao}</p>
                <div className={estilo.subCard}>
                    <div className={estilo.subtitle}>
                        <p className={estilo.author}>Criado por: {props.title}</p>
                        <div className={estilo.icons}>
                            
                                <button className={estilo.icon}>
                                    <IoMdHeartEmpty fontSize={20} />
                                </button>
                                <button className={estilo.icon}>
                                    <CiBookmark fontSize={20} />
                                </button>
                                <DownloadLink link={props.img} descricao={props.descricao } noDesc={true} />
                        </div>
                    </div>
                <img className={estilo.img} src={props.img} alt={`Imagem criada por ${props.alt}`} />
                <p className={estilo.alt}>Imagem de autoria de {props.title}</p>
                </div>
            </div>
            </main>
        </>
    )
}