import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import cards from '../../dados/cards.json';
import Galeria from '../../components/Galeria/Index';
import estilo from '../Inicio/Inicio.module.css'
import { limitador } from "../../ferramentas/limitador";
export default function Inicio() {
    return (
        <>
            <Header></Header>
            <main>   
                <div className={estilo.center}>              
                    <h1>Bem-vindo ao Dribbble</h1>
                    <p>A comunidade dos melhores designers do mundo. Inspire-se, compartilhe e conecte-se com talentos criativos.</p>
                </div> 
            <Galeria dados={cards} limitador={limitador} num={4}/>
            </main>
            <Footer></Footer>
        </>

    )
}