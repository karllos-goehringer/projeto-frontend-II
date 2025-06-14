import DownloadLink from '../../components/DownloadLink/DownloadLink';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import estilo from './Downloads.module.css';


export default function Downloads() {
    return (
        <>
        <Header></Header>
        <main>
            <h1>Downloads</h1>
            <DownloadLink link={'images.jpg'} descricao={'Imagem do Loide'} noDesc={false}/>
            
           
        </main>
        <Footer></Footer>
        </>
    )
}