import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function GetButton() {
    const [data, setData] = useState('asd');
    const [getData, setGetData] = useState(false);

    useEffect(() => {
        const fatchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/data`);
                if (res.statusText === "OK") {
                    console.log(res);
                    setData(res.data)
                }
            } catch (error) {
                console.log("error");
            }

        }
        fatchData()
    })

    return (<>
        <button onClick={() => { setGetData(!getData) }}>{getData ? data : "click to get data"}</button>
    </>);
}

export default GetButton;