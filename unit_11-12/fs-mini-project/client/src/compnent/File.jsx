import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import file from "./pic/file.jpg";
import folder from "./pic/folder.jpg";
import axios from "axios";

function File({ name, isDirectory, size, birthtime, data, setData, setMessage }) {
    const { pathname } = useLocation();
    const [displayData, setDisplayData] = useState(false)
    const dataStr = "file name: " + name + "\n size: " + size + '\n birthtime: ' + birthtime;
    const handelDeleteFile = async () => {
        try {
            console.log(pathname + '/' + name);
            const response = await axios.delete("http://localhost:3001" + pathname + '/' + name);
            // console.log(response.data);
            console.log(name);
            const updateData = data.filter((file) => file.name !== name);
            setMessage(name + "  has been deleted successfully")
            setData(updateData);
        } catch (error) {
            console.error(error);
        }

    }
    return <li key={name}>
        <div className="fileDiv">
            <img src={isDirectory ? folder : file} alt="file_img" />
            <button onClick={handelDeleteFile}>Delete</button>
            <Link to={isDirectory ? pathname + "/" + name : "/file" + pathname + "/" + name}>{name}</Link>
            <div onClick={() => setDisplayData(!displayData)}>
                {displayData ? "🔼" : "🔽"}
                {displayData ? (
                    <pre style={{ whiteSpace: 'pre-line' }}>{dataStr}</pre>
                ) : ""}

            </div>
        </div>
    </li >

}
export default File;