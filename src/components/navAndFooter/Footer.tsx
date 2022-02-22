const Footer = () => {
   return (
      <footer>
         <section className='main-infos'>
            <p>
               Numéro de télephone: <span>+32 471 46 24 61</span>
            </p>
            <p>
               Adresse mail: <span>pleonardpodo@gmail.com</span>
            </p>
         </section>
         <section className='rdv'>
            <section className='left-rdv'>
               <button>
                  <a target={'_blank'} rel='noreferrer' href='https://www.doctoranytime.be/d/podologue/pierre-leonard'>
                     Rdv à Schaerbeek
                  </a>
               </button>
            </section>
            <section className='right-rdv'>
               <button>
                  <a target={'_blank'} rel='noreferrer' href='https://be.mobminder.com/e-resa.php?p=acmuleonard'>
                     Rdv à Uccle
                  </a>
               </button>
            </section>
         </section>
      </footer>
   );
};

export default Footer;
