import estilo from './Galeria.module.css';
import Card from '../Card/Index';
import { limitador } from '../../ferramentas/limitador';

export default function Galeria(props) {
    var novosDados
    if (props.limitador != null) {
        var novosDados = limitador(props.dados, props.num)
    } else { var novosDados = props.dados; }
    return (
        <div className={estilo.gallery}>
            {
                novosDados.map(
                    (e) => {
                        return <Card link={e.image} autor={e.author} alt={e.alt} id={e.id} descricao={e.description} />
                    })
            }
        </div>
    )
}