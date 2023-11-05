import { useEffect, useState } from "react"
import axios from 'axios'
import { Loader } from "../compnent/Loader";
import DisplayPath from "../compnent/DisplayPath";
import { useParams } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();


    const fetchData = async () => {
        try {
            const path = 'http://localhost:3001/files' + (id ? '/' + id : "");
            console.log(path);
            const response = await axios.get('http://localhost:3001/files' + (id ? '/' + id : ""));

            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, [id])
    // useEffect(() => {
    //     console.log(path);
    // }, [path])


    if (isLoading) {
        return <Loader />
    }

    if (!data) {
        return <div>This folder is empty.</div>;
    } else {
        return <DisplayPath data={data} />

    }



}



export default Home 