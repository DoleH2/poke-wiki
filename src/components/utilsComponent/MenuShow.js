import '../../scss/menushow.scss';
const MenuShow = () => {
    return (
        <div className="utils--menu-show mt-5">
            <div className="btn-toggle">Click</div>
            <li className="item" style={{ '--i': 0 }}>
                <a>1</a>
            </li>
            <li className="item" style={{ '--i': 1 }}>
                <a>2</a>
            </li>
            <li className="item" style={{ '--i': 2 }}>
                <a>3</a>
            </li>
            <li className="item" style={{ '--i': 3 }}>
                <a>4</a>
            </li>
        </div>
    )
}

export default MenuShow;