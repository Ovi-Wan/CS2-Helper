import SideCard from "../../components/SideCard";

import ctImg from "../../assets/agents/ct.png";
import tImg from "../../assets/agents/t.png";

export default function Mirage() {
    return (
    <div>
      <h1 className="page-title">Mirage – Utility</h1>
      <p className="page-subtitle"><strong>Choose a side:</strong></p>

      <div className="grid grid-2">
              <SideCard
                title="CT-SIDE"
                image={ctImg}
                link="/utility/mirage/sides/CtMirage"
              />

              <SideCard
                title="T-SIDE"
                image={tImg}
                link="/utility/mirage/sides/TMirage"
              />

      </div>
    </div>
  );
}
