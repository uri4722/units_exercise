import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
    // const navigate = useNavigate();
    // useEffect(() => navigate('/files'))

    return <Navigate to={'/files'} />

} export default Home;