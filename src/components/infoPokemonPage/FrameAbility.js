import { Suspense, lazy, useState } from "react";
import { upperFirst } from "../../utils/handleString"
import '../../scss/frameabilityStyle.scss';
import LoadCircle from "../LoadCircle";
const DetailAbility = lazy(() => import('./DetailAbility'));
export const FrameAbility = ({ dataAbility }) => {
    const [openDetail, setOpenDetail] = useState('');
    console.log(openDetail);
    return (
        <div className="frame-ability rounded d-flex align-items-center gap-2 justify-content-center">
            {
                dataAbility.map((ability, idx) => (
                    <div key={idx} className="rounded frame-box-ability px-2 py-1 rounded-3"
                        onClick={() => setOpenDetail(ability.ability.url)}>
                        {upperFirst(ability.ability.name)}
                    </div>
                ))
            }

            {
                openDetail && (
                    <Suspense fallback={<LoadCircle />}>
                        <DetailAbility api={openDetail} />
                    </Suspense>
                )
            }
        </div>
    )
}

