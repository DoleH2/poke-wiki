import { useNavigate, useParams } from "react-router-dom";
import { useDeleteMultiPetMutation, useInventoryQuery, useInventoryStatsSortMutation } from "../../redux/reducers/apiMember";
import { Suspense, useCallback, useEffect, useState } from "react";
import LoadCircle from "../utilsComponent/LoadCircle";
import PokemonPet from "../gachaPokemonPage/PokemonPet";
import { Pagination } from "../utilsComponent/Pagination";
import { changeRouter } from "../../utils/handleRouter";
import { useDispatch, useSelector } from "react-redux";
import { getListDelete } from "../../redux/selectors/stateDataSelector";
import { resetDataDelete } from "../../redux/reducers/stateDataSlice";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
const listSort = ['default', 'statSortASC', 'statSortDESC', 'statSortLvlDESC', 'statSortLvlASC']
const InventoryFrame = () => {
    const dispatch = useDispatch();
    const { page } = useParams();
    const [deleteMulti, setDeleteMulti] = useState(false);
    const listRemove = useSelector(getListDelete);
    let navigate = useNavigate();
    useEffect(() => {
        validatePath();
    }, [])

    const [typeSort, setTypeSort] = useState('default');
    const { data, status, refetch } = useInventoryQuery({ page: page, sort: typeSort });

    const handleClickSortStat = () => {
        if (typeSort === 'statSortDESC') {
            setTypeSort('statSortASC');
        } else {
            setTypeSort('statSortDESC');
        }
    }
    const handleClickSortLvl = () => {
        if (typeSort === 'statSortLvlDESC') {
            setTypeSort('statSortLvlASC');
        } else {
            setTypeSort('statSortLvlDESC');
        }
    }

    const [removeMultiPet] = useDeleteMultiPetMutation();
    const handleAcceptDeleteMulti = () => {
        if (listRemove.length > 0) {
            removeMultiPet({ list: listRemove });
        }
        setDeleteMulti(false);
    }

    const validatePath = useCallback(() => {
        if (isNaN(Number(page))) {
            changeRouter(navigate, "/error");
        }
    })
    const handleChangePage = (page) => {
        changeRouter(navigate, "/inventory/" + (Number(page.selected) + 1));
    };

    return (
        <div className="container frame-inventory rounded shadow">
            <div className="frame-title mt-2 d-flex flex-wrap border-bottom">
                <p className="h2 fw-bold mx-auto text-white">Inventory</p>
            </div>
            <div className="frame-func-inventory d-flex justify-content-end gap-1 p-2">

                <button className="btn text-white" onClick={() => setTypeSort('default')}>
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <button className="btn btn-warning btn-sort d-flex gap-2 align-items-center text-white"
                    onClick={handleClickSortLvl}>
                    {typeSort === 'statSortLvlDESC' ? <i className="fa-solid fa-arrow-up-wide-short"></i> : typeSort === 'statSortLvlASC' ? <i className="fa-solid fa-arrow-up-short-wide"></i> : <i className="fa-solid fa-align-center"></i>}
                    Lvl
                </button>
                <button className="btn btn-warning btn-sort d-flex gap-2 align-items-center text-white"
                    onClick={handleClickSortStat}>
                    {typeSort === 'statSortDESC' ? <i className="fa-solid fa-arrow-up-wide-short"></i> : typeSort === 'statSortASC' ? <i className="fa-solid fa-arrow-up-short-wide"></i> : <i class="fa-solid fa-align-center"></i>}
                    <i className="fa-regular fa-star"></i>
                </button>
                <button className="btn btn-danger btn-delete" onClick={() => { setDeleteMulti(!deleteMulti); dispatch(resetDataDelete()) }}><i className="fa-regular fa-trash-can"></i></button>
                {
                    deleteMulti && <button className="btn btn-success" onClick={handleAcceptDeleteMulti}>Confirm Delete</button>
                }
            </div>
            <div className="frame-list d-flex flex-wrap gap-1 justify-content-center p-2">
                {
                    status === "pending" ? (
                        <LoadCircle />
                    ) : (
                        <>
                            {console.log(data)}
                            {
                                data && data.content.length > 0 && data.content.map((pokemon) => (
                                    <Suspense key={pokemon.idPetUser} fallback={<LoadCircle />}>
                                        <PokemonPet result={pokemon} edit={true} deleteBox={deleteMulti}
                                        />
                                    </Suspense>)
                                )
                            }
                            {
                                data && data.content.length === 0 && (
                                    <p className="text-white">Dont have anything in your inventory</p>
                                )
                            }
                        </>
                    )
                }
            </div>
            <div className="frame-paging">
                {status !== "pending" && (
                    <Pagination
                        curPage={page}
                        maxPage={data.totalPages}
                        onChange={handleChangePage}
                    />
                )}
            </div>
        </div>
    )
}

export default InventoryFrame;