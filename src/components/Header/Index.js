import estilo from './Header.module.css';
import Botao from '../Botao';
import NavLinks from '../NavLinks';
import menu from '../../dados/menu.json'

export default function Header(props) {
    return (
        <header className={estilo.navbar}>

            <div className={estilo.container}>
                <div className={estilo.navbarleft}>
                    <h1 className={estilo.logo}>Dribbble</h1>
                </div>
                <NavLinks links={menu} />
                <NavLinks>

                    <Botao goto="/login" descricao="Sign In"></Botao>
                    {window.location.pathname !== '/login' ? (
                        <Botao goto="/signup" descricao="Sign Up" login={true} />
                    ) : <Botao goto="/signup" descricao="Sign Up" login={false} />}
                </NavLinks>




                <nav className={estilo["auth-buttons"]}>

                </nav>


            </div>
        </header>
    )
}  