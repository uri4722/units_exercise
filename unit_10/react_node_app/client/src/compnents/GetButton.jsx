import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function GetButton() {
    const [data, setData] = useState('asd');
    const [getData, setGetData] = useState(false);

    useEffect(() => {
        const fatchData = async () => {
            const res = await axios.get(`//localhost:3001/`)
            console.log("123");

            if (res.statusText === "OK") {
                console.log(res.data);
                setData(res.data)
            }
        }
        fatchData()
    }, [])

    return (<>
        <button onClick={() => { setGetData(!getData) }}>{getData ? data : "click to get data"}</button>
    </>);
}

export default GetButton;