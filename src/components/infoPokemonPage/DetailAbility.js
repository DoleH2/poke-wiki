import { useEffect, useState } from "react";
import { getRequest } from "../../axios/httpRequest";

const DetailAbility = ({ api }) => {
    const [stateDetail, setStateDetail] = useState('');
    const fetchApi = async () => {
        console.log(api);
        const result = await getRequest(api);
        console.log(result);
        setStateDetail(result.data.effect_entries[0].effect);
    }
    useEffect(() => {
        fetchApi();
    }, [api])
    return (
        <>
            {stateDetail !== '' &&
                (<div className="frame-detail-ability d-flex flex-column p-2">
                    <button className="btn-close ms-auto"
                        onClick={() => setStateDetail('')}></button>
                    <p className="m-0">{stateDetail !== '' && stateDetail}</p>
                </div>)}
        </>

    )
}

export default DetailAbility;