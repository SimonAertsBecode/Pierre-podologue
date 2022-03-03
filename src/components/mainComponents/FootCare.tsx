import React from 'react';
import { Link } from 'react-router-dom';

const FootCare = () => {
   //modal on click for span in description

   /* L’orthoplastie est une orthèse en silicone moulée sur mesure et destinée à:
      Corriger une déviation (Hallux valgus, orteils en griffes..)
      Protéger une zone douloureuse 
      L’orthonyxie est une orthèse unguéale destinée à corriger la courbure de l’ongle afin d’éviter la réapparition d’un ongle incarné.*/
   return (
      <section className='footcare-container'>
         <section className='description'>
            <p>
               Le soin de pied (pédicure médicale) au cabinet ou à <span>domicile</span> comprend la
               prise en charge esthétique et/ou thérapeuthique de différentes{' '}
               <Link to='/pathologie'>pathologies</Link> liées directement aux atteintes spécifiques
               du pied. Parfois, un appareillage spécifique via <span>orthoplastie</span>,
               <span>orthonyxie</span> ou <span>semelles fonctionnelles</span> sera nécessaire pour
               éviter la chronicité de ces pathologies.
            </p>
         </section>

         <section className='diabetic'>
            <h4>En cas de diabète</h4>
            <p>
               Le patient diabétique doit se rendre au moins 2x par an chez le podologue afin de
               vérifier les éventuelles complications liées au diabète.
            </p>
            <p>
               En effet, un diabète mal équilibré peut donner certaines complications:{' '}
               <span>Une neuropathie sensitive</span> (absence de douleur),{' '}
               <span>Une arthériopathie</span> (retard dans la cicatrisation),{' '}
               <span>Des déformations osseuses</span>.
            </p>
            <section className='diabetic-advices'>
               <ul>
                  <li>
                     Un diabète mal équilibré peut donner certaines complications (LA NEUROPATHIE
                     SENSITIVE (absence de douleur), UNE MAUVAISE CIRCULATION (retard dans la
                     cicatrisation), DES DÉFORMATIONS osseuses,
                  </li>
                  <li>
                     Regarder tous les jours ses pieds (si pas possible, demander à un proche),
                     regarder si pas de plaies
                  </li>
                  <li>Ne pas marcher pieds nus quelles que soient les circonstances</li>
                  <li>Ne coupez pas vos ongles seuls</li>
                  <li>Signaler toute lésion ou coloration suspecte</li>
                  <li>Appliquer une crème hydratante tous les jours sur vos pieds</li>
                  <li>Faites appel à votre podologue pour soigner vos cors, durillons</li>
                  <li>Attention aux sources de chaleur. N'utilisez pas de produits agressifs.</li>
                  <li>
                     Après la douche, sécher correctement vos pieds et insister dans les espaces
                     entre les orteils pour éviter l'apparition de mycoses
                  </li>
                  <li>
                     Changer de chaussettes tous les jours. Il est fortement conseillé d'utiliser
                     des chaussettes en coton et sans couture pour éviter les blessures
                  </li>
               </ul>
            </section>
         </section>
      </section>
   );
};

export default FootCare;
