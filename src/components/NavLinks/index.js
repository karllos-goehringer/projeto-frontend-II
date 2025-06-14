import Botao from '../Botao';
import estilo from './NavLinks.module.css';


function NavLinks(props) {
    //console.log(props)

    const menus = props.children?props.children:props.links.map( (e) => {
        return (
            <Botao goto={e.goto} descricao={e.descricao} login={e.login}></Botao>)
    })

    return (<>
    <nav className={estilo["nav-links"]}>
        {menus}       
      </nav>
    </>)
}

export default NavLinks