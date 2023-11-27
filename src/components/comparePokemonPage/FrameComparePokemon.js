import { useCallback, useState } from "react";
import BoxSearchCompare from "./BoxSearchCompare";

const FrameComparePokemon = () => {
  const [adBox, setAdBox] = useState(1);

  const handleActive = useCallback((kq) => {
    console.log(adBox);
    if (kq && adBox < 5) {
      setAdBox((adBox) => adBox + 1);
    }
  }, [adBox])
  return (
    <div className="container p-0">
      <div className="frame-add-compare p-0 d-flex flex-wrap justify-content-center gap-2">
        {
          [...Array(adBox)].map((e, idx) => (
            <BoxSearchCompare key={idx} active={handleActive} />
          ))
        }
      </div>
    </div>
  );
};

export default FrameComparePokemon;
