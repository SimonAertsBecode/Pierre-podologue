import { Link } from 'react-router-dom';
import Svg from '../svg/Svg';

const Home = () => {
   return (
      <>
         <Svg />
         <section className='home-page'>
            <h1>Pierre Léonard</h1>
            <section className='presentation'>
               <img src='selfie.JPG' alt='Pierre Léonard' />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero, molestias voluptates, illum odit dignissimos pariatur error facilis illo earum, fugiat sint dolores? Sint sunt eligendi, blanditiis cum optio vitae,
                  voluptates temporibus, qui sequi ducimus accusantium eos eaque porro error odit. Accusantium in, deleniti beatae voluptates voluptas dolor sed esse.
               </p>
            </section>
            <section className='acceuil'>
               La podologie est une discipline paramédicale concernant l'étude, la prévention, le diagnostic et la prise en charge appropriée des pathologies de l'appareil locomoteur, du membre inférieur, pied et cheville inclus. Elle prend en compte
               les problèmes, les douleurs, les manifestations locales et systémiques liés à ces parties du corps. La prise en charge podologique peut être éducative, préventive ou curative. Les podologues peuvent proposer deux types de traitements
               différents, parfois complémentaires : L'appareillage de <Link to='semelle-fonctionnelle'>semelles fonctionnelles</Link> et/ou le <Link to='soins-pied'>soin du pied</Link>.
            </section>
         </section>
      </>
   );
};

export default Home;
