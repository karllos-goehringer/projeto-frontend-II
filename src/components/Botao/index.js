import { Link } from 'react-router-dom';
import estilo from './Botao.module.css';

function Botao ({goto, descricao, login = false}) {
    if(window.location.pathname === goto) {
        login = true
    }
   
    
    return (
        <Link to={`${goto}`} className={estilo.link}>
            <a className={login?estilo.signup:estilo.default}>{descricao}</a>
        </Link>
    )
}

export default Botao