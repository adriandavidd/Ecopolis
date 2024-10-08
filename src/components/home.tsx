import { Nav } from "./nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import { Inicio } from "./inicio";
import { Ods } from "./ods";
import { Ciencias } from "./ciencias";
import { Arte } from "./arte";
import { Info } from "./info";
import { Matematicas } from "./matematicas";
import { Quimica } from "./quimica";

export const Home = () => {
  return (
    <div className="bg-white">
      <HashRouter>
        <Nav></Nav>
        <Routes>
          <Route index element={<Inicio></Inicio>} />
          <Route path="/ods" element={<Ods></Ods>} />
          <Route path="/ciencias" element={<Ciencias></Ciencias>} />
          <Route path="/arte" element={<Arte></Arte>} />
          <Route path="/info" element={<Info></Info>} />
          <Route path="/matematicas" element={<Matematicas></Matematicas>} />
          <Route path="/quimica" element={<Quimica></Quimica>} />
        </Routes>
      </HashRouter>
    </div>
  );
};
