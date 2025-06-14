import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import estilo from './Sobre.module.css'
export default function Sobre() {
    return (
        <>
            <Header></Header>
            <main>
                <title>Sobre o Site | Dribbble</title>
                <div class={estilo.container}>
                    <h1>Sobre o Site</h1>
                    <p>Este site foi inspirado no Dribbble, uma plataforma dedicada a criativos do mundo todo. Aqui, designers, ilustradores, animadores e desenvolvedores podem compartilhar seus trabalhos, receber feedback e se conectar com uma comunidade apaixonada por design.</p>

                    <p>Nosso objetivo é oferecer um espaço visualmente agradável e funcional para que você possa explorar projetos criativos, se inspirar e mostrar suas próprias criações. Cada detalhe foi pensado para destacar o conteúdo visual de forma elegante e profissional.</p>

                    <p>Se você é um criador ou apenas aprecia um bom design, está no lugar certo. Navegue, descubra e, se quiser, participe com seus próprios trabalhos!</p>
                </div>

            </main>
            <Footer></Footer>
        </>
    )
}