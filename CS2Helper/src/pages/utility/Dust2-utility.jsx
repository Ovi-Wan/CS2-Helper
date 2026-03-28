import SideCard from "../../components/SideCard";

import ctImg from "../../assets/agents/ct.png";
import tImg from "../../assets/agents/t.png";

export default function Dust2() {
    return (
    <div>
      <h1 className="page-title">Dust II – Utility</h1>
      <p className="page-subtitle"><strong>Choose a side:</strong></p>

      <div className="grid grid-2">
              <SideCard
                title="CT-SIDE"
                image={ctImg}
                link="/utility/dust2/sides/CtDust2"
              />

              <SideCard
                title="T-SIDE"
                image={tImg}
                link="/utility/dust2/sides/TDust2"
              />

      </div>
    </div>
  );
}
