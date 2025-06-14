import estilo from './DownloadLink.module.css';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
export default function DownloadLink(props) {
    let desc;
    if (props.noDesc!== true || props.noDesc === undefined) {
        desc = <div>
            <span>Arquivo:</span>
            <span>{props.descricao}</span>
        </div>
    }
    return (
        <div className={estilo.divDownloadLink}>
            {desc}
            <a href={props.link} download className={estilo.downloadLink}>
                <FaDownload />
            </a>
        </div>
    );
}
