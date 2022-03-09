import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

//*icons
import { BsArrowDownLeft, BsArrowDown, BsArrowDownRight } from 'react-icons/bs';

const allDatasForModal = [
   {
      title: 'Pathologies traitées par une Orthoplastie',
      description: (
         <>
            <li>Orteils en griffesosités</li>
            <li>Hallux valgus</li>
            <li>Orteils en marteaux</li>
            <li>Orteils en griffes</li>
            <li>Chevauchement d'orteils</li>
         </>
      ),
   },
   {
      title: 'Pathologies traitées par un soin de pied',
      description: (
         <>
            <li>Hyperkératose (durillons) et callosités</li>
            <li>Hyperkératose nucléée (cors)</li>
            <li>Mycoses unguéales</li>
            <li>Ongles incarnés</li>
            <li>Ongles douloureux</li>
            <li>Hématomes sous unguéale</li>
         </>
      ),
   },
   {
      title: 'Pathologie traitées par une Orthonyxie',
      description: (
         <>
            <li>Courbure anormale de l'ongle</li>
         </>
      ),
   },
];

const buttonContent = ['Orthoplastie', 'soin de pied', 'Orthonyxie'];

const Pathology = () => {
   const [dataForModal, setDataForModal] = useState(allDatasForModal[0]);
   const [activeBtn, setActiveBtn] = useState(0);
   const [refWidht, setRefWidth] = useState<number>();

   const contentSection = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (contentSection.current) {
         let { offsetWidth } = contentSection.current;
         setRefWidth(offsetWidth);
      }
   }, []);

   const changeContent = (index: number) => {
      setDataForModal(allDatasForModal[index]);
      setActiveBtn(index);
   };

   return (
      <section className='pathology'>
         <section className='pathology-fctsole'>
            <p>Les différentes pathologies pouvant être traitées par semelles fonctionnelles</p>
            <ul>
               <li>Douleurs aux pieds (talon, voute plantaire,plante du pied…)</li>
               <li>Tendinites des membres inférieurs</li>
               <li>Fractures de stress, périostites</li>
               <li>
                  Douleurs chroniques aux <span>genoux</span> <span>hanches</span> et <span>dos</span>
               </li>
               <li>Une marche anormale (marche en interne, marche en externe, pieds plats, pieds creux, genoux en X, …)</li>
               <li>Maladies de croissance (maladie de Sever, Osgood Schlatt)</li>
            </ul>
         </section>

         <motion.section className='pathology-oso' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <section className='solutions'>
               <p>Les différentes pathologies traitées par</p>
               <section className='svgs'>
                  <BsArrowDownLeft /> <BsArrowDown /> <BsArrowDownRight />
               </section>

               <section className='buttons'>
                  {buttonContent.map((btn, index) => {
                     return (
                        <button
                           onClick={() => {
                              changeContent(index);
                           }}
                           className={index === activeBtn ? 'active' : undefined}
                           key={btn}
                        >
                           {btn}
                        </button>
                     );
                  })}
               </section>
            </section>

            <section className='content'>
               <motion.section className='for-what' ref={contentSection} style={{ width: refWidht }}>
                  <h4>{dataForModal.title}</h4>
                  <ul>{dataForModal.description}</ul>
               </motion.section>
            </section>
         </motion.section>
      </section>
   );
};

export default Pathology;
