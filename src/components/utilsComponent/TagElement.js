import { upperFirst } from "../../utils/handleString";
import "../../scss/tagelementstyle.scss";

export const TagElement = ({ data }) => {
  return (
    <>
      {
        <div
          className={`frame-tag-element px-3 py-1 text-white fw-bold border ${data}`}
        >
          {upperFirst(data)}
        </div>
      }
    </>
  );
};
