import { upperFirst } from "../utils/handleString";
import "../scss/tagelementstyle.scss";

export const TagElement = ({ data }) => {
  return (
    <>
      {
        <div
          className={`frame-tag-element rounded-3 px-3 py-1 text-white fw-bold ${data.type.name}`}
        >
          {upperFirst(data.type.name)}
        </div>
      }
    </>
  );
};
