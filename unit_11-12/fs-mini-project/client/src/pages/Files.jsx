import { useEffect, useState } from "react"
import axios from 'axios'
import { Loader } from "../compnent/Loader";
import DisplayPath from "../compnent/DisplayPath";
import { useLocation } from "react-router-dom";



function Files() {
    const [data, setData] = useState([]);
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            // console.log("http://localhost:3001" + pathname);
            const response = await axios.get("http://localhost:3001" + pathname);
            // console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])


    if (isLoading) {
        return <Loader />
    }

    if (!data) {
        return <div>This file/folder is empty.</div>;
    } else {
        // console.log(data);
        return typeof data === 'object' ? <DisplayPath data={data} setData={setData} fetchData={fetchData} /> : <div> {data}</div>;
    }

}



export default Files 