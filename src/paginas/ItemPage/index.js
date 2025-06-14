import estilo from  './ItemPage.module.css';
import cards from '../../dados/cards.json';
import { useParams } from 'react-router-dom';
import Default from '../Default';
import Header from '../../components/Header/Index';
import ItemPage from '../../components/ItemPage/Index';
import Footer from '../../components/Footer/Index';
export default function ItemPagina() {
  const { id } = useParams();
  const item = cards.find(card => card.id === Number(id));
  if (!item) {
    return <Default />;
  }
  return (
    <>
    <Header></Header>
    <main>
     <ItemPage title={item.author} img={item.image} alt={item.alt} id={item.id} descricao={item.description} />
    </main>
    <Footer></Footer>
    </>
  );
}