import React, { useEffect, useState } from 'react';
import colors from "../styles/_settings.scss";
//  𝗼𝗻 𝘃𝗮 𝗹𝘂𝗶 𝗽𝗮𝘀𝘀𝗲𝗿 𝘂𝗻 𝗽𝗿𝗼𝗽𝘀 𝗲𝘁 𝗶𝗹 𝘃𝗮 𝗳𝗮𝗹𝗹𝗼𝗶𝗿 𝘁𝗲𝘀𝘁𝗲𝗿 𝘀𝗶 𝗽𝗲𝗿𝗰𝗲𝗻𝘁 𝗲𝘀𝘁 𝗽𝗼𝘀𝗶𝘁𝗶𝗳 𝗼𝘂 𝗻𝗲𝗴𝗮𝘁𝗶𝗳 𝗲𝘁 𝗹𝘂𝗶 𝗿𝗲𝗻𝘃𝗼𝗶𝘆𝗲𝗿 𝘂𝗻𝗲 𝗰𝗼𝘂𝗹𝗲𝘂𝗿

const PercentChange = ({ percent }) => {
    const [color, setColor] = useState();

    useEffect(() => {
        if (percent) {
            if (percent >= 0) {
                setColor(colors.green1)
            } else {
                setColor(colors.red1)
            }
        } else {
            setColor(colors.white1)
        }
        //𝗱è𝘀 𝗾𝘂𝗲 𝘁𝘂 𝗮𝘀 𝗹𝗲 𝗰𝗵𝗶𝗳𝗳𝗿𝗲, 𝗿𝗲𝗹𝗮𝗻𝗰𝗲 𝗺𝗼𝗶 𝗹𝗲 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁
    }, [percent])



    return (
        <p className='percent-change-container' style={{ color }}>
            {percent ? percent.toFixed(1) + "%" : "-"}
        </p>
    );
};

export default PercentChange;