import { upperFirst } from "../utils/handleString";
import "../scss/tagelementstyle.scss";

export const TagElement = ({ data }) => {
  return (
    <>
      {
        <div
          className={`frame-tag-element rounded-pill px-3 py-1 ${data.type.name}`}
        >
          {upperFirst(data.type.name)}
        </div>
      }
    </>
  );
};
