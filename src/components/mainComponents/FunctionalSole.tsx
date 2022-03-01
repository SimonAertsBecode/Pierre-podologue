//*import component
import Crafing from '../subComponents/functionalSole/Crafing';
import Diagnostic from '../subComponents/functionalSole/Diagnostic';

const FunctionalSole = () => {
   return (
      <section className='functional-sole'>
         <Diagnostic />
         <Crafing />
      </section>
   );
};

export default FunctionalSole;
