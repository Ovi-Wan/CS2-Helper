import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Pagini principale */
import Home from "./pages/Home";
import TrainingMaps from "./pages/TrainingMaps";
import Utility from "./pages/Utility";
import Strats from "./pages/Strats";


/* Pagini Utility */
import MirageUtility from "./pages/utility/Mirage-utility";
import InfernoUtility from "./pages/utility/Inferno-utility";

/* Pagini Strats */
import MirageStrats from "./pages/strats/Mirage-strats";
import InfernoStrats from "./pages/strats/Inferno-strats";

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
            <Route path="/training-maps" element={<TrainingMaps />} />

            {/* Pagini cu carduri */}
            <Route path="/utility" element={<Utility />} />
            <Route path="/strats" element={<Strats />} />

            {/* Pagini Utility */}
            <Route path="/utility/mirage" element={<MirageUtility />} />
            <Route path="/utility/inferno" element={<InfernoUtility />} />

            {/* Pagini Strats */}
            <Route path="/strats/mirage" element={<MirageStrats />} />
            <Route path="/strats/inferno" element={<InfernoStrats />} />

          </Routes>
        </section>
      </main>
    </>
  );
}
