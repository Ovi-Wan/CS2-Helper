import SideCard from "../../components/SideCard";

import ctImg from "../../assets/agents/ct.png";
import tImg from "../../assets/agents/t.png";

export default function Overpass() {
    return (
    <div>
      <h1 className="page-title">Overpass – Utility</h1>
      <p className="page-subtitle"><strong>Choose a side:</strong></p>

      <div className="grid grid-2">
              <SideCard
                title="CT-SIDE"
                image={ctImg}
                link="/utility/overpass/sides/CtOverpass"
              />

              <SideCard
                title="T-SIDE"
                image={tImg}
                link="/utility/overpass/sides/TOverpass"
              />

      </div>
    </div>
  );
}
