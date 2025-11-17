import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { ArtigoDetalhe } from "../pages/artigoDetalhe/ArtigoDetalhe";

const AppRouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/artigo/:id" element={<ArtigoDetalhe/>} />
    </Routes>
  );
};

export default AppRouteConfig;