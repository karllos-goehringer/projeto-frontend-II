import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import cards from '../../dados/cards.json';
import Galeria from '../../components/Galeria/Index';
import { limitador } from "./../../ferramentas/limitador";

export default function Produto() {
    return (
        <>
            <Header></Header>
            <main>                    
                <Galeria dados={cards} limitador={limitador} num={20} />
            </main>
            <Footer></Footer>
        </>

    )
}