import { useCallback, useEffect, useMemo, useState } from "react";
import LoadCircle from "../utilsComponent/LoadCircle";
import SunRay from "../utilsComponent/SunRay";
import { upperFirst } from "../../utils/handleString";
import '../../scss/pokemonpet.scss'
import LineStats from "../utilsComponent/LineStats";
import { calculatorLevel, calculatorStat } from "../../utils/handleLevel";
import ButtonRemove from "./ButtonRemove";
import { useDeletePetMutation } from "../../redux/reducers/apiMember";
import { useDispatch, useSelector } from "react-redux";
import { checkExistStateDelete } from "../../redux/selectors/stateDataSelector";
import { addDataDelete, removeDataDelete } from "../../redux/reducers/stateDataSlice";

const PokemonPet = ({ result, edit, deleteBox }) => {
    const dispatch = useDispatch();
    const valueDelete = useSelector(checkExistStateDelete(result.idPetUser));
    const calculatorStar = useCallback((info) => {
        let pointStar = Number(info.statsIVAtk) + Number(info.statsIVDef) + Number(info.statsIVHp) + Number(info.statsIVSAtk) + Number(info.statsIVSDef) + Number(info.statsIVSpd)
        if (pointStar <= 50) {
            return 1;
        } else if (pointStar > 50 && pointStar <= 80) {
            return 2;
        } else if (pointStar > 80 && pointStar <= 120) {
            return 3;
        } else if (pointStar > 120 && pointStar <= 150) {
            return 4;
        } else {
            return 5;
        }
    }, [result])
    const rankStat = useCallback((stat) => {

        if (stat <= 12) {
            return "common";
        }
        if (stat > 12 && stat <= 22) {
            return "rare";
        }
        if (stat > 22 && stat <= 28) {
            return "epic";
        }
        if (stat > 28) {
            return "legend";
        }
    }, [result])
    const [removePet] = useDeletePetMutation();
    const handleRemovePet = () => {
        removePet({ idPet: result.idPetUser });
    }
    const handleCheckRemovePet = (e) => {
        if (e.target.checked) {
            dispatch(addDataDelete(result.idPetUser));
        } else {
            dispatch(removeDataDelete(result.idPetUser));
        }
    }
    const [objectLevel, setObjectLevel] = useState();
    const [objectStats, setObjectStats] = useState();
    useEffect(() => {
        let calculatorLvl = calculatorLevel(result.xp);
        let calculatorPoint = calculatorStat(result);
        setObjectLevel(calculatorLvl);
        setObjectStats(calculatorPoint);
    }, [result])

    const star = calculatorStar(result);
    const [loadPokemon, setLoadPokemon] = useState(false)
    return (
        <div className="frame-result-gacha-pet position-relative">
            {deleteBox &&
                <div className="frame-delete position-absolute w-100 h-100 p-1"
                    style={{ zIndex: 11, background: '#00000040' }}>
                    <input type="checkbox" className="form-check-input" defaultChecked={valueDelete && 'checked'}
                        onChange={handleCheckRemovePet}
                        style={{ width: '35px', height: '35px' }}></input>
                </div>}
            <div className="frame-result-inner">

                <div className="frame-pet-front p-2">
                    <div className="frame-pet-front-content border h-100"
                    >

                        {
                            loadPokemon && (<div className="info-pokemon-gacha w-100">
                                <p className="fs-5 m-0 text-center fw-bold text-white bg-dark">{upperFirst(result.name)}
                                    <em className="fs-6 text-warning">{edit && " Lvl " + result.level}</em></p>
                                <div className="qualify-pokemon-gacha d-flex pt-1 justify-content-center gap-1">
                                    {
                                        Array.from({ length: star }).map((_, index) => (
                                            <i key={index} className="fa-solid fa-star text-warning fs-2"></i>

                                        ))
                                    }
                                </div>
                            </div>)
                        }
                        <img
                            onLoad={() => setLoadPokemon(true)}
                            className="w-100 mt-auto img-pokemon"
                            style={{ zIndex: "10" }}
                            src={result.urlImg}
                        ></img>
                    </div>
                </div>
                <div className="frame-pet-back p-2">
                    <div className="content-back w-100 h-100 border p-2"
                    >
                        <p className="text-center fw-bold fs-5 m-0">{upperFirst(result.name)}</p>
                        <div className="frame-elements d-flex justify-content-center">
                            {
                                result.element.split(",").map((element, idx) => (
                                    <img key={idx} src={require(`../../img/elements/${element}.png`)} style={{ width: '30px' }}></img>
                                ))
                            }
                        </div>
                        {
                            edit && objectLevel && (
                                <div className="frame-level">
                                    <p className="m-0 w-100 d-flex justify-content-between">
                                        <span className="fs-5 fw-bold">{objectLevel.level}</span>
                                        <em className="xp-pet fs-6" style={{ alignSelf: 'self-end' }}>{objectLevel.xpCurrent + "/" + objectLevel.xpNextLevel}</em>
                                    </p>
                                    <LineStats
                                        percent={objectLevel.percentXp}
                                        lineColor={'#ffa134'}
                                    />
                                </div>
                            )
                        }
                        <div className="frame-hp">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">Health <em className={`` + rankStat(result.statsIVHp)}>{rankStat(result.statsIVHp)}</em></p>
                                <p className="m-0">{objectStats && objectStats.hp}</p>
                            </div>
                        </div>

                        <div className="frame-atk">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">Attack <em className={rankStat(result.statsIVAtk)}>{rankStat(result.statsIVAtk)}</em></p>
                                <p className="m-0">{objectStats && objectStats.atk}</p>
                            </div>
                        </div>

                        <div className="frame-def">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">Defense <em className={rankStat(result.statsIVDef)}>{rankStat(result.statsIVDef)}</em></p>
                                <p className="m-0">{objectStats && objectStats.def}</p>
                            </div>
                        </div>

                        <div className="frame-satk">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">S.Attack <em className={rankStat(result.statsIVSAtk)}>{rankStat(result.statsIVSAtk)}</em></p>
                                <p className="m-0">{objectStats && objectStats.satk}</p>
                            </div>
                        </div>

                        <div className="frame-sdef">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">S.Defense <em className={rankStat(result.statsIVSDef)}>{rankStat(result.statsIVSDef)}</em></p>
                                <p className="m-0">{objectStats && objectStats.sdef}</p>
                            </div>
                        </div>

                        <div className="frame-spd">
                            <div className="stat d-flex justify-content-between">
                                <p className="m-0 fw-bold">Speed <em className={rankStat(result.statsIVSpd)}>{rankStat(result.statsIVSpd)}</em></p>
                                <p className="m-0">{objectStats && objectStats.spd}</p>
                            </div>
                        </div>
                        {
                            edit && (
                                <ButtonRemove
                                    onRemove={handleRemovePet}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPet;