import SideCard from "../../components/SideCard";

import ctImg from "../../assets/agents/ct.png";
import tImg from "../../assets/agents/t.png";

export default function Anubis() {
    return (
    <div>
      <h1 className="page-title">Anubis – Utility</h1>
      <p className="page-subtitle"><strong>Choose a side:</strong></p>

      <div className="grid grid-2">
              <SideCard
                title="CT-SIDE"
                image={ctImg}
                link="/utility/anubis/sides/CtAnubis"
              />

              <SideCard
                title="T-SIDE"
                image={tImg}
                link="/utility/anubis/sides/TAnubis"
              />

      </div>
    </div>
  );
}
