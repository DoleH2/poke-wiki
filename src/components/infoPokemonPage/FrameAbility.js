import { Suspense, lazy, useState } from "react";
import { upperFirst } from "../../utils/handleString";
import "../../scss/frameabilityStyle.scss";
import LoadCircle from "../LoadCircle";
import Button from "react-bootstrap/Button";
const DetailAbility = lazy(() => import("./DetailAbility"));
// import DetailAbility from "./DetailAbility";
const FrameAbility = ({ dataAbility }) => {
  const [openDetail, setOpenDetail] = useState("");

  const handleClickAbility = (api) => {
    setOpenDetail(api);
  };
  const handleCloseDetailAbility = () => {
    setOpenDetail("");
  };
  return (
    <div className="frame-ability rounded d-flex align-items-center gap-2 justify-content-center">
      {dataAbility.map((ability, idx) => (
        <Button
          key={idx}
          variant="secondary"
          className="rounded frame-box-ability px-2 py-1 rounded-3"
          onClick={() => handleClickAbility(ability.ability.url)}
        >
          {upperFirst(ability.ability.name)}
        </Button>
      ))}

      <Suspense fallback={<LoadCircle />}>
        <DetailAbility
          show={openDetail}
          handleClose={handleCloseDetailAbility}
        />
      </Suspense>
    </div>
  );
};
export default FrameAbility;
