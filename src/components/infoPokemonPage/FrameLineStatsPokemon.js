import LineStats from "../utilsComponent/LineStats";
const maxHP = 260;
const maxAtk = 170;
const maxDef = 190;
const maxSAtk = 180;
const maxSDef = 160;
const maxSpd = 200;
const FrameLineStatsPokemon = ({ dataStats, level }) => {
  return (
    <div className="frame-stats py-5 px-3 d-flex flex-column gap-4">
      <div className="frame-hp">
        <p className="m-0 fw-bold">HP: {dataStats[0].base_stat}</p>
        <LineStats
          lineColor={"#60D394"}
          trackLineColor={"#DFF6EA"}
          percent={(Number(dataStats[0].base_stat) * 100) / Number(maxHP)}
        />
      </div>
      <div className="frame-atk">
        <p className="m-0 fw-bold">ATK: {dataStats[1].base_stat}</p>
        <LineStats
          lineColor={"#F14B3D"}
          trackLineColor={"#FCDBD8"}
          percent={(Number(dataStats[1].base_stat) * 100) / Number(maxAtk)}
        />
      </div>
      <div className="frame-def">
        <p className="m-0 fw-bold">DEF: {dataStats[2].base_stat}</p>
        <LineStats
          lineColor={"#455FD6"}
          trackLineColor={"#C1DEFF"}
          percent={(Number(dataStats[2].base_stat) * 100) / Number(maxDef)}
        />
      </div>
      <div className="frame-satk">
        <p className="m-0 fw-bold">S.ATK: {dataStats[3].base_stat}</p>
        <LineStats
          lineColor={"#FF844F"}
          trackLineColor={"#FFE3D5"}
          percent={(Number(dataStats[3].base_stat) * 100) / Number(maxSAtk)}
        />
      </div>
      <div className="frame-sdef">
        <p className="m-0 fw-bold">S.DEF: {dataStats[4].base_stat}</p>
        <LineStats
          lineColor={"#6E44FF"}
          trackLineColor={"#CEC0FF"}
          percent={(Number(dataStats[4].base_stat) * 100) / Number(maxSDef)}
        />
      </div>
      <div className="frame-spd">
        <p className="m-0 fw-bold">SPD: {dataStats[5].base_stat}</p>
        <LineStats
          lineColor={"#FDD85D"}
          trackLineColor={"#FFF7DF"}
          percent={(Number(dataStats[5].base_stat) * 100) / Number(maxSpd)}
        />
      </div>
    </div>
  );
};

export default FrameLineStatsPokemon;
