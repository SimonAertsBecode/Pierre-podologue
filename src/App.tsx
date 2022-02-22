import Routing from './components/router/Routing';
import Navbar from './components/navAndFooter/Navbar';
import Footer from './components/navAndFooter/Footer';

const App = () => {
   return (
      <>
         <Navbar />
         <main className='main-section'>
            <Routing />
         </main>
         <Footer />
      </>
   );
};

export default App;
