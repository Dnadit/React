// import Mydiv from './03/Mydiv';
// import Frcst from './04/Frcst';
// import Test from './test/Test';
// import Taccident from "./05/Taccident";
// import Gal from "./06/Gal";
// import Mycom from "./07/Mycom";
// import MyForm from "./08/MyForm";
// import GalSelect from "./06/GalSelect";
import RouteMain from "./09/RouteMain";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
      // <Test />
      // <Frcst />   
      // <Taccident />   
      // <Gal />
      // <Mycom />
      // <MyForm />
      // <GalSelect />
      <BrowserRouter>
        <RouteMain />
      </BrowserRouter>
  );
}

export default App;