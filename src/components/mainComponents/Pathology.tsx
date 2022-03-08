import React from 'react';

const Pathology = () => {
   return (
      <section className='pathology'>
         <section className='pathology-fctsole'>
            <p>Voici différentes pathologies pouvant être traitées par semelles fonctionnelles:</p>
            <ul>
               <li>Douleurs aux pieds (talon, voute plantaire,plante du pied…)</li>
               <li>Tendinites des membres inférieurs</li>
               <li>Fractures de stress, périostites</li>
               <li>
                  Douleurs chroniques aux <span>genoux</span>, <span>hanches</span> et <span>dos</span>
               </li>
               <li>Une marche anormale (marche en interne, marche en externe, pieds plats, pieds creux, genoux en X, …)</li>
               <li>Maladies de croissance (maladie de Sever, Osgood Schlatter, …)</li>
            </ul>
         </section>
         <section className='pathology-others'>Voici différentes pathologies traitées par un soin de pied / Orthoplastie / Orthonyxie : </section>
      </section>
   );
};

export default Pathology;
