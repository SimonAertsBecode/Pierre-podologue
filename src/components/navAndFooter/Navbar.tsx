import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
   return (
      <nav>
         <section className='logo-section'>
            <Link to='/'>
               <h1>Pitosh le podo</h1>
            </Link>
         </section>
         <section className='main-navigation'>
            <NavLink to='/' className={(navData) => (navData.isActive ? 'nav-active' : '')}>
               Acceuil
            </NavLink>
            <NavLink to='/semelle-fonctionnelle' className={(navData) => (navData.isActive ? 'nav-active' : '')}>
               Semelles fonctionnelles
            </NavLink>
            <NavLink to='soins-pied' className={(navData) => (navData.isActive ? 'nav-active' : '')}>
               Soin de pied / soin à domicile
            </NavLink>
            <NavLink to='pathologie' className={(navData) => (navData.isActive ? 'nav-active' : '')}>
               Pathologies
            </NavLink>
            <NavLink to='conseils' className={(navData) => (navData.isActive ? 'nav-active' : '')}>
               Conseils
            </NavLink>
            <HashLink to='#footer' smooth={true}>
               Prendre rendez-vous
            </HashLink>
         </section>
      </nav>
   );
};

export default Navbar;
