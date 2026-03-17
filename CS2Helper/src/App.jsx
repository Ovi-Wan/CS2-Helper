import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Pagini principale */
import Home from "./pages/Home";
import Utility from "./pages/Utility";
import Callouts from "./pages/Callouts";

/* Pagini Utility */
import MirageUtility from "./pages/utility/Mirage-utility";
import InfernoUtility from "./pages/utility/Inferno-utility";
import NukeUtility from "./pages/utility/Nuke-utility";
import OverpassUtility from "./pages/utility/Overpass-utility";
import AncientUtility from "./pages/utility/Ancient-utility";
import Dust2Utility from "./pages/utility/Dust2-utility";
import AnubisUtility from "./pages/utility/Anubis-utility";

/* Pagini Utility – Sides */
import CtMirage from "./pages/utility/sides/CtMirage";
import TMirage from "./pages/utility/sides/TMirage";
import CtInferno from "./pages/utility/sides/CtInferno";
import TInferno from "./pages/utility/sides/TInferno";
import CtNuke from "./pages/utility/sides/CtNuke";
import TNuke from "./pages/utility/sides/TNuke";
import CtOverpass from "./pages/utility/sides/CtOverpass";
import TOverpass from "./pages/utility/sides/TOverpass";
import CtDust2 from "./pages/utility/sides/CtDust2";
import TDust2 from "./pages/utility/sides/TDust2";
import CtAnubis from "./pages/utility/sides/CtAnubis";
import TAnubis from "./pages/utility/sides/TAnubis"; 
import CtAncient from "./pages/utility/sides/Ctancient";
import TAncient from "./pages/utility/sides/TAncient";


export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main className="page-wrapper">
        {/* key schimbat = forțează fade-in la fiecare schimbare de pagină */}
        <section key={location.pathname} className="page-shell">
          <Routes location={location}>

            {/* Pagini fără carduri */}
            <Route path="/" element={<Home />} />
           

            {/* Pagini cu carduri */}
            <Route path="/utility" element={<Utility />} />
            
            {/* Pagini Utility */}
            <Route path="/utility/mirage" element={<MirageUtility />} />
            <Route path="/utility/inferno" element={<InfernoUtility />} />
            <Route path="/utility/nuke" element={<NukeUtility />} />
            <Route path="/utility/overpass" element={<OverpassUtility />} />
            <Route path="/utility/ancient" element={<AncientUtility />} />
            <Route path="/utility/dust2" element={<Dust2Utility />} />
            <Route path="/utility/anubis" element={<AnubisUtility />} />

            {/* Pagini Callouts */}
            <Route path="/callouts" element={<Callouts />} />

            {/* Pagini Utility – Sides */}
            <Route path="/utility/mirage/sides/CtMirage" element={<CtMirage />} />
            <Route path="/utility/mirage/sides/TMirage" element={<TMirage />} />
            <Route path="/utility/inferno/sides/CtInferno" element={<CtInferno />} />
            <Route path="/utility/inferno/sides/TInferno" element={<TInferno />} />
            <Route path="/utility/nuke/sides/CtNuke" element={<CtNuke />} />
            <Route path="/utility/nuke/sides/TNuke" element={<TNuke />} />
            <Route path="/utility/overpass/sides/CtOverpass" element={<CtOverpass />} />
            <Route path="/utility/overpass/sides/TOverpass" element={<TOverpass />} />
            <Route path="/utility/ancient/sides/CtAncient" element={<CtAncient />} />
            <Route path="/utility/ancient/sides/TAncient" element={<TAncient />} />
            <Route path="/utility/dust2/sides/CtDust2" element={<CtDust2 />} />
            <Route path="/utility/dust2/sides/TDust2" element={<TDust2 />} />
            <Route path="/utility/anubis/sides/CtAnubis" element={<CtAnubis />} />
            <Route path="/utility/anubis/sides/TAnubis" element={<TAnubis />} />

          </Routes>
        </section>
      </main>
    </>
  );
}
