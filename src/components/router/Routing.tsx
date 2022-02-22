import { Route, Navigate, Routes } from 'react-router-dom';

//* Components
import FootCare from '../mainComponents/FootCare';
import FunctionalSole from '../mainComponents/FunctionalSole';
import Home from '../mainComponents/Home';
import Pathology from '../mainComponents/Pathology';
import Advices from '../mainComponents/Advices';

const Routing = () => {
   return (
      <Routes>
         <Route index element={<Home />} />
         <Route path='semelle-fonctionnelle' element={<FunctionalSole />} />
         <Route path='soins-pied' element={<FootCare />} />
         <Route path='pathologie' element={<Pathology />} />
         <Route path='conseils' element={<Advices />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routes>
   );
};

export default Routing;
