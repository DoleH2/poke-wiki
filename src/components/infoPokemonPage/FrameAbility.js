import { Suspense, lazy, useState } from "react";
import { upperFirst } from "../../utils/handleString";
import "../../scss/frameabilityStyle.scss";
import LoadCircle from "../utilsComponent/LoadCircle";
import Button from "react-bootstrap/Button";
const DetailAbility = lazy(() => import("./DetailAbility"));
const FrameAbility = ({ dataAbility, ...rest }) => {
  const [openDetail, setOpenDetail] = useState("");

  const handleClickAbility = (api) => {
    setOpenDetail(api);
  };
  const handleCloseDetailAbility = () => {
    setOpenDetail("");
  };
  return (
    <div className="frame-ability rounded d-flex align-items-center gap-2 justify-content-center mx-1" {...rest}>
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
