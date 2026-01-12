import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Login} from "./components/login";
import {Home} from "./components/home";
import { Menu } from "./components/menu";

import { ProductProvider } from "./contexts/productsContext";
function App() {
  return (
    <ProductProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/productsList/:category" element={<Menu/>} />

        </Routes>
      </BrowserRouter>
    </ProductProvider>
    
    
  );
}

export default App;
