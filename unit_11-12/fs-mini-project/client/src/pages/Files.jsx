import { useEffect, useState } from "react"
import axios from 'axios'
import { Loader } from "../compnent/Loader";
import DisplayPath from "../compnent/DisplayPath";
import {  redirect, useLocation } from "react-router-dom";


function Files() {
    const [data, setData] = useState([]);
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            console.log("http://localhost:3001" + pathname);
            const response = await axios.get("http://localhost:3001" + pathname);
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    // const handleOpen = () => {
    //     window.open("http://localhost:3001" + pathname);
    // };


    useEffect(() => {
        fetchData();
    }, [pathname])


    if (isLoading) {
        return <Loader />
    }

    if (!data) {
        return <div>This folder is empty.</div>;
    } else {
        return pathname.slice(1, 6) === 'files' ? <DisplayPath data={data} /> : <div> {data}</div>;
    }



}



export default Files 