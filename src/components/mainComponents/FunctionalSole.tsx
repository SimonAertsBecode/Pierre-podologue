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

   const renderLi = (index: number, title: string, text?: string) => {
      return (
         <>
            <li data-name={Object.keys(showModal)[index]}>{title}</li>
            <AnmneseModal showModal={Object.values(showModal)[index]}> {text} </AnmneseModal>
         </>
      );
   };

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
            <ol
               onClick={(e: React.SyntheticEvent<EventTarget>) => {
                  if (e.target instanceof HTMLLIElement) {
                     let name: string = String(e.target.dataset.name);
                     setShowModal((prevState) => ({ ...prevState, [name]: true }));
                  }
               }}
            >
               {renderLi(0, 'Anamnèse')}
               {renderLi(1, 'Analyse statique')}
               {renderLi(2, 'Examen palpatoire')}
               {renderLi(3, 'Mesures biométriques')}
               {renderLi(4, 'Analyse dynamique (marche, course)')}
               {renderLi(5, 'Conseils spécifiques')}
            </ol>
         </section>
         <section className='steps'></section>
      </section>
   );
};

export default FunctionalSole;
