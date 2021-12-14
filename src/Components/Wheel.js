import React, {useEffect, useState} from 'react';
import wheelImage from "../Assets/Wheel.png"

function Wheel() {
    const [spinClicked, setSpinClicked] = useState(false);
    const [num_case, setNumCase] = useState("");
    const [textResult, setTextResult] = useState("");
    const [timer] = useState(5200);

    const spinHandler = () => {
        setTextResult("")
        setSpinClicked(false);
        setNumCase(Math.floor((Math.random() * 12) + 1));
        setSpinClicked(true)
    };

    useEffect(() => {
        if (spinClicked) {
            setTimeout(() => setSpinClicked(false), timer)
        }
    });

    useEffect(() => {
        if (num_case) {
            setTimeout(() => {
                switch (num_case) {
                    case 12:
                        setTextResult('your gift is card holder')
                        break;
                    case 11:
                        setTextResult('your gift is pen drive');
                        break;
                    case 10:
                        setTextResult('your gift is voucher');
                        break;
                    case 9:
                        setTextResult('your gift is card holder');
                        break;
                    case 8:
                        setTextResult('your gift is pen');
                        break;
                    case 7:
                        setTextResult('your gift is power bank');
                        break;
                    case 6:
                        setTextResult('your gift is pen');
                        break;
                    case 5:
                        setTextResult('your gift is pen drive');
                        break;
                    case 4:
                        setTextResult('your gift is card holder');
                        break;
                    case 3:
                        setTextResult('your gift is pen');
                        break;
                    case 2:
                        setTextResult('your gift is pen driver');
                        break;
                    case 1:
                        setTextResult('your gift is pen');
                        break;
                    default:
                }
            }, timer)
        }
    }, [num_case]);

    return (
        <>
            <figure className={"wheel"}>
                <img
                    className={`${spinClicked ? "animation" : ""}`}
                    style={{
                        transform: 'rotate(' + ((num_case * 30) - 15) + 'deg)'
                    }}
                    draggable={"false"} onClick={() => spinHandler()} src={wheelImage} alt="wheel"/>
            </figure>
            {textResult && <p>{textResult}</p>}
        </>
    );
}

export default Wheel;
