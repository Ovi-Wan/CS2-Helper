import MapCard from "../components/MapCard";

import mirageImg from "../assets/maps/mirage.png";
import mirageLogo from "../assets/maps/mirage-logo.png";

import infernoImg from "../assets/maps/inferno.png";
import infernoLogo from "../assets/maps/inferno-logo.png";

import ancientImg from "../assets/maps/ancient.png";
import ancientLogo from "../assets/maps/ancient-logo.png";

import dust2Img from "../assets/maps/dust2.png";
import dust2Logo from "../assets/maps/dust2-logo.png";

import nukeImg from "../assets/maps/nuke.png";
import nukeLogo from "../assets/maps/nuke-logo.png";

import overpassImg from "../assets/maps/overpass.png";
import overpassLogo from "../assets/maps/overpass-logo.png";

import anubisImg from "../assets/maps/anubis.png";
import anubisLogo from "../assets/maps/anubis-logo.png";

export default function Callouts() {
    return (
    <div className="page">
      <h1 className="page-title">Callouts</h1>
      <p className="page-subtitle"><strong>Callouts for every map. Choose a map:</strong></p>

      <div className="grid grid-3">
              <MapCard
                name="Mirage"
                image={mirageImg}
                logo={mirageLogo}
                link="/utility/mirage"
              />
      
              <MapCard
                name="Inferno"
                image={infernoImg}
                logo={infernoLogo}
                link="/utility/inferno"
              />
      
              <MapCard
                name="Ancient"
                image={ancientImg}
                logo={ancientLogo}
                link="/utility/ancient"
              />
      
              <MapCard
                name="Dust II"
                image={dust2Img}
                logo={dust2Logo}
                link="/utility/dust2"
              />
      
              <MapCard
                name="Nuke"
                image={nukeImg}
                logo={nukeLogo}
                link="/utility/nuke"
              />
      
              <MapCard
                name="Overpass"
                image={overpassImg}
                logo={overpassLogo}
                link="/utility/overpass"
              />
      
              <MapCard
                name="Anubis"
                image={anubisImg}
                logo={anubisLogo}
                link="/utility/anubis"
              />
      
            </div>
            
    </div>
  );
}
