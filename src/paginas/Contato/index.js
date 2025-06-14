import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import estilo from './Contato.module.css';
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
export default function Contatos() {
    return (
        <>
        <Header></Header>
        <main>
            <h1>Contatos</h1>   
            <p>Entre em contato conosco através das nossas redes sociais.</p>
            <div className={estilo.lista}>
                <FaInstagramSquare fontSize={20} /> <a href="https://www.instagram.com/dribbble" target="_blank" rel="noopener noreferrer">Instagram</a>
                <ImFacebook2 fontSize={20}/> <a href="https://www.facebook.com/dribbble" target="_blank" rel="noopener noreferrer">Facebook</a>
                <FaSquareXTwitter fontSize={20} /> <a href="https://x.com/dribbble" target="_blank" rel="noopener noreferrer">Twitter</a>
                <FaPinterest fontSize={20} /> <a href="https://www.pinterest.com/dribbble" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
        </main>
        <Footer></Footer>
        </>
    )
}