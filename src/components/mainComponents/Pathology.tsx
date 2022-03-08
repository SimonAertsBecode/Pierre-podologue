import { useState } from 'react';
import Modal from '../subComponents/modals/Modal';
import Section from '../subComponents/modals/Section';

const allDatasForModal = [
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
      title: 'Pathologie traitées par une Orthonyxie',
      description: (
         <>
            <li>Courbure anormale de l'ongle</li>
         </>
      ),
   },
];

const Pathology = () => {
   const [dataForModal, setDataForModal] = useState(allDatasForModal[0]);

   return (
      <section className='pathology'>
         <section className='pathology-fctsole'>
            <p>Voici différentes pathologies pouvant être traitées par semelles fonctionnelles:</p>
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
         <section className='pathology-others'>
            Voici différentes pathologies traitées par un <button>soin de pied</button>, <button>Orthoplastie</button>, <button>Orthonyxie</button>.
         </section>
         <section className='modal-container'>
            <Section data={dataForModal} section='pathology' />
         </section>
      </section>
   );
};

export default Pathology;
