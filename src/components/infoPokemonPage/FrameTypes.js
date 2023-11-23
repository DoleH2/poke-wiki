import { TagElement } from "../utilsComponent/TagElement";

const FrameTypes = ({ listType, ...rest }) => {
    return (
        <div className="element-pokemon d-flex flex-wrap gap-1 justify-content-center" {...rest}>
            {listType.map((element, idx) => (
                <TagElement key={idx} data={element} />
            ))}
        </div>
    )
}

export default FrameTypes;