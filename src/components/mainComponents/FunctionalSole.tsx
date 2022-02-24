import { useState } from 'react';
import { Link } from 'react-router-dom';

//*import component
import AnmneseModal from '../modals/AnmneseModal';

const FunctionalSole = () => {
   const [showModal, setShowModal] = useState({
      firstModal: false,
      secondModal: false,
      thirdModal: false,
      fourthModal: false,
      fifthModal: false,
      sixthModal: false,
   });

   return (
      <section className='functional-sole'>
         <h3>Semelle fonctionnel</h3>
         <section className='anamnese'>
            <p>
               Les semelles fonctionnelles permettent de corriger biomécaniquement la position du pied et d'aligner les axes des membres inférieurs. Elles ont pour but de rétablir la fonction normale du pied durant le déroulement du pas afin d'éviter
               certaines compensations néfastes.
            </p>
            <p>
               Au cabinet, elles sont fabriquées <span>sur-mesure</span> via un scanner et logiciel <span>3D</span>. Les matériaux utilisés pour les semelles varient en fonction de l'âge et de l'activité du patient.
            </p>
            <p>
               <span>L'examen biomécanique</span> en cabinet permet de comprendre le fonctionnement global du patient et de reconnaître si oui ou non un appareillage via semelles fonctionnelles peut aider dans sa{' '}
               <Link to='/pathologie'>pathologie</Link>. Cet examen biomécanique se déroule en plusieurs étapes :
            </p>
            <ol>
               <li>Anamnèse</li>
               <AnmneseModal showModal={showModal.firstModal}> Hello </AnmneseModal>
               <li>Analyse statique</li>
               <li>Examen palpatoire</li>
               <li>Mesures biométriques</li>
               <li>Analyse dynamique (marche, course)</li>
               <li>Conseils spécifiques</li>
            </ol>
         </section>
         <section className='steps'></section>
      </section>
   );
};

export default FunctionalSole;
