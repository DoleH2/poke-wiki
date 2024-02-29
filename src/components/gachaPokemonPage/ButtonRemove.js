import { memo, useMemo, useState } from "react"

const ButtonRemove = ({ onRemove }) => {
    const [lockRemove, setLockRemove] = useState(true);
    return (
        <div className="frame-btn-edit-pet mx-auto"
            style={{ width: 'fit-content' }}
            onClick={() => setLockRemove(false)}
            onMouseLeave={() => setLockRemove(true)}
        >
            <button className="btn btn-remove-pet btn-danger rounded-circle" disabled={lockRemove}
                onClick={onRemove}
            >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    )
}

export default memo(ButtonRemove);