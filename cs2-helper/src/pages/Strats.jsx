import MapCard from "../components/MapCard";

import mirageImg from "../assets/maps/mirage.png";
import mirageLogo from "../assets/maps/mirage-logo.png";

import infernoImg from "../assets/maps/inferno.png";
import infernoLogo from "../assets/maps/inferno-logo.png";

export default function Strats() {
    return (
    <div>
      <h1 className="page-title">Strats</h1>
      <p className="page-subtitle">Alege o hartă pentru execuții și tactici.</p>

      <div className="grid grid-3">
        <MapCard
          name="Mirage"
          image={mirageImg}
          logo={mirageLogo}
          link="/strats/mirage"
        />

        <MapCard
          name="Inferno"
          image={infernoImg}
          logo={infernoLogo}
          link="/strats/inferno"
        />
      </div>
    </div>
  );
}
